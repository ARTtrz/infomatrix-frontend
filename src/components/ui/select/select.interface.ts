import {
	ControllerRenderProps,
	Message,
	MultipleFieldErrors,
	Ref
} from 'react-hook-form'
import { Options } from 'react-select'

export type FieldError = {
	root?: FieldError
	ref?: Ref
	types?: MultipleFieldErrors
	message?: Message
}

export interface IFieldProps {
	placeholder: string
	error?: FieldError | undefined
}
export interface IOption {
	value: number | string
	label: string | number
}

export interface ISelect extends IFieldProps {
	defaultValue: string
	options: Options<IOption>
	isMulti?: boolean
	field: ControllerRenderProps<any, any>
	isLoading?: boolean
	empty_space: string
}
