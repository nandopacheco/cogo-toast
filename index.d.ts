import { ReactNode, MouseEventHandler } from 'react';

export type Options = Partial<{
	hideAfter: number;
	position:
		| 'top-left'
		| 'top-center'
		| 'top-right'
		| 'bottom-left'
		| 'bottom-center'
		| 'bottom-right';
	heading: string;
	role: string;
	toastContainerID: string;
	toastContainer: Node;
	renderIcon: Function;
	bar: Partial<{
		size: string;
		style: 'solid' | 'dashed' | 'dotted';
		color: string;
	}>;
	onClick: MouseEventHandler;
}>;

export type HideToastFunction = () => void;

export type Method = (
	message: string,
	options?: Options,
) => Promise<void> & { hide: HideToastFunction };

declare namespace cogoToast {
	export const success: Method;
	export const info: Method;
	export const loading: Method;
	export const warn: Method;
	export const error: Method;
}

export default cogoToast;
