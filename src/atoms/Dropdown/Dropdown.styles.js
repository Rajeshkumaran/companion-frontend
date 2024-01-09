import { mergeStyleSets } from '@fluentui/react';

const getStyles = () =>
    mergeStyleSets({
        title: {
            boxShadow: "1px 1px 1px 1px #e2e2e2",
            border: "none",
            borderRadius: "4px",
            fontSize: "12px",
        }
    });

export default getStyles;
