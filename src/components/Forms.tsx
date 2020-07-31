import styled from 'styled-components';
import FormControlMui from '@material-ui/core/FormControl';
import NativeSelectMui from '@material-ui/core/NativeSelect';
import TextField from '@material-ui/core/TextField';
import InputAdornmentMui from '@material-ui/core/InputAdornment';
import SelectMui from '@material-ui/core/Select';
import InputLabelMui from '@material-ui/core/InputLabel';

type Props = {
  error?: boolean;
  card?: string;
};

export const InputAdornment = styled(InputAdornmentMui)<Props>`
  p {
    color: ${(props) => (props.error ? '#941616' : 'auto')};
  }
`;

type FormProps = {
  mb?: string;
};
export const FormControl = styled(FormControlMui)<FormProps>`
  width: 100%;
  margin-bottom: ${({ mb }) => (mb ? `${mb}` : '0')};
`;

export const InputLabel = styled(InputLabelMui)`
  &.MuiFormLabel-root {
    font-weight: 500;
    color: #6c7f87;
    font-size: 16px;
    line-height: 16px;
    &.Mui-focused {
      color: #6c7f87;
    }
  }
`;

export const NativeSelect = styled(NativeSelectMui)`
  color: #fff;
  .MuiNativeSelect-root {
    color: #fff;
    font-family: 'Roboto';
    font-weight: 500;
    font-size: 14px;
    line-height: 1;
  }
  .MuiNativeSelect-icon {
    fill: #fff;
    width: 20px;
  }
  .MuiNativeSelect-select.MuiNativeSelect-select {
    padding-right: 8px;
  }
  .MuiInputBase-input {
    padding: 0;
  }
  &.MuiInput-underline {
    border-bottom: none;

    &:before {
      border-bottom: none;
    }

    &:after {
      border-bottom: none;
    }

    &:hover:not {
      border-bottom: none;
    }
  }
`;

export const CardInput = styled(TextField)`
  .MuiInputBase-input {
    font-family: 'Roboto';
    color: #02254d;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    &::placeholder {
      font-size: 12px;
      color: #02254d;
      color: ${(props) => (props.error ? '#941616' : 'auto')};
      opacity: ${(props) => (props.error ? 1 : 'auto')};
    }
  }
  .MuiFormLabel-root {
    font-weight: 500;
    color: #6c7f87;
    font-size: 12px;
    line-height: 16px;
  }
  .MuiFormLabel-root.Mui-focused {
    color: #02254d;
  }

  .MuiInput-underline {
    border-bottom-width: 2px;
    &:before {
      border-bottom-color: #6c7f87;
      border-bottom-width: 2px;
    }
    &:after {
      border-bottom-color: #6c7f87;
      border-bottom-width: 2px;
    }
    &:hover {
      border-bottom-color: #6c7f87;
      border-bottom-width: 2px;
    }
  }

  .MuiInput-underline:hover:not(.Mui-disabled):before {
    border-bottom-color: #6c7f87;
    border-bottom-width: 2px;
  }

  .MuiInput-underline.Mui-focused {
    border-bottom-color: #02254d;
    border-bottom-width: 3px;

    &:after {
      border-bottom-color: #02254d;
      border-bottom-width: 3px;
    }
    &:before {
      border-bottom-color: #02254d;
      border-bottom-width: 3px;
    }
  }

  .MuiFormLabel-root.Mui-error {
    color: #6c7f87;
  }

  .MuiInput-underline.Mui-error {
    &:after {
      border-bottom-color: #941616;
      border-bottom-width: 3px;
    }
  }

  .MuiInputLabel-shrink {
    transform: translate(0, 1.5px) scale(1);
  }
`;

export const Select = styled(SelectMui)`
  width: 100%;
  .MuiSelect-root {
    width: 100%;
  }
  .MuiInputBase-input {
    font-family: 'Roboto';
    color: #02254d;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    &::placeholder {
      font-size: 12px;
      color: #02254d;
      color: ${(props) => (props.error ? '#941616' : 'auto')};
      opacity: ${(props) => (props.error ? 1 : 'auto')};
    }
  }
  .MuiSelect-input {
  }
  &.MuiInput-underline {
    border-bottom-width: 2px;
    &:before {
      border-bottom: 2px solid #6c7f87;
    }
    &:after {
      border-bottom-color: #6c7f87;
      border-bottom-width: 2px;
    }
    &:hover {
      border-bottom-color: #6c7f87;
      border-bottom-width: 2px;
    }
  }
  .MuiInput-underline:hover:not(.Mui-disabled):before {
    border-bottom-color: #6c7f87;
    border-bottom-width: 2px;
  }
  .MuiInput-underline.Mui-focused {
    border-bottom-color: #02254d;
    border-bottom-width: 3px;

    &:after {
      border-bottom-color: #02254d;
      border-bottom-width: 3px;
    }
    &:before {
      border-bottom-color: #02254d;
      border-bottom-width: 3px;
    }
  }
  .MuiInput-underline.Mui-error {
    &:after {
      border-bottom-color: #941616;
      border-bottom-width: 3px;
    }
  }
`;
