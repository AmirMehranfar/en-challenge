import { TNextHeadTagWrapperProps } from '@/components/atoms/NextHeadTagWrapper/type';
import React from 'react'

type TLayout = {
  children: React.ReactElement;
  headTagProps?: TNextHeadTagWrapperProps;
};

export type TContentProps = {
  children: React.ReactElement
}

export default TLayout
