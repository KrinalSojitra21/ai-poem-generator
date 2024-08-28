import React from "react";
import Select, {Props as SelectProps, StylesConfig} from "react-select";
import {colourStyles} from "./components/react_select.styleConfig";
import {Option} from "@/types/types";

export type PrimaryDropDownProps = SelectProps<Option> & {
  label?: string;
  className?: string;
};

const PrimarySelect = ({
  label,
  className,
  ...restProps
}: PrimaryDropDownProps) => {
  const id = React.useId();

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {label && <label htmlFor={id}>{label}</label>}
      {/* <Select
        className="basic-single"
        classNamePrefix="select"
        theme={(theme) => ({
          ...theme,
          borderRadius: 8,

          colors: {
            ...theme.colors,
            // primary25: muiTheme.palette.secondary.light,
            // primary: muiTheme.palette.secondary.main,
          },
        })}
        styles={customStyles}
        {...restProps}
      /> */}

      <Select
        isSearchable={false}
        isLoading={false}
        blurInputOnSelect={true}
        // menuPlacement={smallScreen ? "top" : "auto"}
        theme={(theme) => ({
          ...theme,
          borderRadius: 8,
          colors: {
            ...theme.colors,
          },
        })}
        styles={colourStyles}
        // styles={customStyles}
        hideSelectedOptions={true}
        isClearable={false}
        className="basic-single "
        classNamePrefix="select"
        {...restProps}
      />
      {/* {errorMessage && (
          <span className="mt-1 text-xs text-destructive">{errorMessage}</span>
        )} */}
    </div>
  );
};

PrimarySelect.displayName = "PrimarySelect";

export {PrimarySelect};
{
  /* <Select
                isSearchable={false}
                isLoading={!userSettings}
                value={selectedOptions?.gender || null}
                blurInputOnSelect={true}
                minMenuHeight={300}
                maxMenuHeight={250}
                // menuPlacement={smallScreen ? "top" : "auto"}
                theme={(theme) => ({
                  ...theme,
                  borderRadius: 8,

                  colors: {
                    ...theme.colors,
                    primary25: muiTheme.palette.secondary.light,
                    primary: muiTheme.palette.secondary.main,
                  },
                })}
                styles={voiceSettingStyles}
                hideSelectedOptions={true}
                isClearable={false}
                name="Gender Select"
                options={userSettings ? genderOptions : []}
                onChange={(value) => {
                  setSelectedOptions((prev) => ({
                    ...prev,
                    gender: value as SingleValue<Option>,
                  }));
                }}
                placeholder="Gender"
                components={{
                  DropdownIndicator: selectedOptions?.gender
                    ? CustomDropdownIndicator
                    : null,
                  IndicatorSeparator: () => null,
                }}
              /> */
}
