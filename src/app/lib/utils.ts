import { type ClassValue, clsx } from "clsx";
import { toast, ToastOptions } from "react-hot-toast";
import { twMerge } from "tailwind-merge";
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime);

export function diffForHumans(date) {
  if (date) {
    return dayjs(date).fromNow();
  }
}


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const convertParam = (
  value: string | null | string[],
  selectedDates?: string[] | null | Date[],
  name?: string
) => ({
  target: { value, name, selectedDates },
});


export const showError = (err: string, options?: ToastOptions) => {
  return toast.error(err, { id: err, ...options });
};

export const showSuccess = (err: string, options?: ToastOptions) => {
  return toast.success(err, { id: err, ...options });
};

interface ToastPromiseOptions {
  promise: Promise<any>;
  loading: string;
  success: string;
  error: string;
  options?: ToastOptions;
}

export const showPromise = async ({
  promise,
  loading,
  success,
  error,
  options,
}: ToastPromiseOptions) => {
  try {
    toast.loading(loading, options);

    const result = await promise;

    toast.success(success, { ...options, id: success });

    return result;
  } catch (err) {
    toast.error(error, { ...options, id: error });
    throw err;
  }
};



export function formatnumber(num: number): string | undefined {
  if (typeof (Number(num)) !== 'number') {
    return undefined
  }
  return new Intl.NumberFormat('en-US').format(num)
}


export function formatcurrency(amount: number): string | undefined {
  if (!amount) return;

  const formattedAmount = new Intl.NumberFormat("en-US", {
    style: 'currency',
    currency: 'GHS',
    notation: 'standard'
  }).format(amount);

  return formattedAmount;
}


export function dateReformat(date: string | Date): string | undefined {
  if (date) {
    return (dayjs(date).format('YYYY/MM/DD'))
  }
}

export const debounce = <T extends (...args: any[]) => void>(func: T, delay: number) => {
  let timeoutId: NodeJS.Timeout | null = null;
  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId as NodeJS.Timeout);
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

export function updateUrlQueryParam(url: string, key: string, value: string | null): string {
  const urlObject = new URL(url);
  const queryParams = new URLSearchParams(urlObject.search);

  if (value === null || value === "") {
    if (queryParams.has(key)) {
      queryParams.delete(key);
    }
  } else {
    if (queryParams.has(key)) {
      queryParams.set(key, value);
    } else {
      queryParams.append(key, value);
    }
  }

  urlObject.search = queryParams.toString();

  return urlObject.toString();
}

export function isNullOrWhitespace(input: string | null | undefined): boolean {
  return input === null || input === undefined || /^\s*$/.test(input);
}



export function getQueryParamValue(url: string, key: string): string | null {
  if (url == null || url == undefined || key == null || key == undefined) return;

  const urlObject = new URL(url);
  const queryParams = new URLSearchParams(urlObject.search);

  const paramValue = queryParams.get(key);

  return paramValue;
}


export function extractQueryParams(url: string): Record<string, string> | undefined {
  if (url == null || url == undefined) return;
  const urlObject = new URL(url);
  const queryParams = new URLSearchParams(urlObject.search);
  const result: Record<string, string> = {};

  queryParams.forEach((value, key) => {
    result[key] = value;
  });

  return result;
}


export function getInitials(name: string) {
  const parts = name.split(' ');

  if (parts.length === 1) {
    return parts[0][0];
  }

  return parts[0][0] + parts[1][0];
}
