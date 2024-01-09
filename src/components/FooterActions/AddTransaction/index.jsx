import React from 'react';
import { DatePicker, DayOfWeek, defaultDatePickerStrings } from '@fluentui/react';
import { Dropdown, Stack, Text, Input, Button, ButtonVariants } from '@/atoms';
import { useGetCategoriesQuery, useCreateTransactionMutation } from '@/dataLayer/apis';
import { useFluentTheme } from '@/theme';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import { CURRENCY_SYMBOL } from '@/utils/constants';
import { useToast } from '@/hooks';

const AddTransaction = ({ onCancel }) => {
  const theme = useFluentTheme();
  const methods = useForm({
    mode: 'onSubmit',
  });
  const {
    setValue,
    getValues,
    trigger,
    control,
    formState: { errors },
  } = methods;

  const { data: categoriesResponse } = useGetCategoriesQuery(undefined);
  const categories =
    categoriesResponse?.data?.map((category) => ({
      key: category._id,
      text: category.name,
    })) || [];

  const [createTransaction] = useCreateTransactionMutation();
  const { notifySuccess, notifyFailure } = useToast();

  const onSave = async () => {
    const isValid = await trigger();
    const { name, amount, category, transaction_type, budget_type, transaction_date } = getValues();

    if (!isValid) return;

    const response = await createTransaction({
      name,
      category_id: categories.filter((c) => c.key === category)[0]?.key,
      budget_type,
      transaction_type,
      transaction_date,
      amount,
      currency_type: 'INR',
    });

    if (response?.data?.status?.code === 200) {
      onCancel();
      notifySuccess(response?.data?.status?.message);
    } else {
      console.log('error', response.error);
      notifyFailure(response.error || 'Something went wrong');
    }
  };

  return (
    <Stack tokens={{ childrenGap: 16 }}>
      <Text variant='mediumSemibold'>Add transaction</Text>
      <FormProvider {...methods}>
        <Stack
          tokens={{ childrenGap: 16 }}
          styles={{
            root: {
              padding: theme.spacing.s3,
              width: '100%',
            },
          }}
        >
          <Controller
            name='name'
            control={control}
            rules={{
              required: 'Name is required',
            }}
            render={({ field: fieldProps }) => {
              const fieldError = errors['name'];
              return (
                <Input
                  placeholder='Enter name'
                  onChange={(_data, newValue) => {
                    setValue('name', newValue, { shouldValidate: true });
                  }}
                  errorMessage={fieldError?.message}
                  className='w-2'
                />
              );
            }}
          />
          <Controller
            name='amount'
            control={control}
            rules={{
              required: 'Amount is required',
              pattern: {
                value: /^[0-9]*$/,
                message: 'Amount should be a number',
              },
            }}
            render={() => {
              const fieldError = errors['amount'];
              return (
                <Input
                  placeholder='Enter amount in rupees'
                  prefix={CURRENCY_SYMBOL['INR']}
                  type='number'
                  onChange={(_data, newValue) => {
                    setValue('amount', newValue, { shouldValidate: true });
                  }}
                  errorMessage={fieldError?.message}
                />
              );
            }}
          />
          <Controller
            name='category'
            control={control}
            rules={{ required: 'Category is required' }}
            render={() => {
              const fieldError = errors['category'];

              return (
                <Dropdown
                  placeholder='Select category'
                  options={categories}
                  selectedKey={getValues('category')}
                  onChange={(_e, option) => {
                    setValue('category', option.key, { shouldValidate: true });
                  }}
                  errorMessage={fieldError?.message}
                />
              );
            }}
          />

          <Controller
            name='transaction_type'
            control={control}
            rules={{ required: 'Transaction type is required' }}
            render={() => {
              const fieldError = errors['transaction_type'];
              return (
                <Dropdown
                  placeholder='Select transaction type'
                  options={[
                    { key: 'expense', text: 'Expense' },
                    { key: 'income', text: 'Income' },
                  ]}
                  selectedKey={getValues('transaction_type')}
                  onChange={(_e, option) => {
                    setValue('transaction_type', option.key, {
                      shouldValidate: true,
                    });
                  }}
                  errorMessage={fieldError?.message}
                />
              );
            }}
          />

          <Controller
            name='budget_type'
            control={control}
            rules={{ required: 'Budget type is required' }}
            render={() => {
              const fieldError = errors['budget_type'];
              return (
                <Dropdown
                  placeholder='Select budget type'
                  options={[
                    { key: 'needs', text: 'Needs' },
                    { key: 'wants', text: 'Wants' },
                    { key: 'investments', text: 'Investments' },
                  ]}
                  selectedKey={getValues('budget_type')}
                  onChange={(_e, option) => {
                    setValue('budget_type', option.key, {
                      shouldValidate: true,
                    });
                  }}
                  errorMessage={fieldError?.message}
                />
              );
            }}
          />

          <Controller
            name='transaction_date'
            control={control}
            rules={{ required: 'Transaction date is required' }}
            render={() => {
              const fieldError = errors['transaction_date'];
              return (
                <DatePicker
                  isRequired
                  firstDayOfWeek={DayOfWeek.Monday}
                  showWeekNumbers={true}
                  firstWeekOfYear={1}
                  showMonthPickerAsOverlay={true}
                  placeholder='Select a date...'
                  ariaLabel='Select a date'
                  strings={defaultDatePickerStrings}
                  onSelectDate={(date) => {
                    setValue('transaction_date', date);
                  }}
                />
              );
            }}
          />
        </Stack>
        <Stack
          horizontal
          tokens={{ childrenGap: 8 }}
          styles={{
            root: {
              width: 'auto !important',
            },
          }}
        >
          <Button onClick={onSave} className='w-2'>
            Save
          </Button>
          <Button variant={ButtonVariants.Secondary} onClick={onCancel} className='w-2'>
            Cancel
          </Button>
        </Stack>
      </FormProvider>
    </Stack>
  );
};

export default AddTransaction;
