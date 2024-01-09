import * as React from 'react';
import { Dropdown } from '@fluentui/react';
import getStyles from './Dropdown.styles';

export default function FluentDropdown({
  selectedKey,
  options,
  className = '',
  placeholder,
  ...rest
}) {
  const dropdownClass = getStyles();

  return (
    <Dropdown
      placeholder={placeholder}
      selectedKey={selectedKey}
      options={options}
      styles={dropdownClass}
      className={className}
      {...rest}
    ></Dropdown>
  );
}
