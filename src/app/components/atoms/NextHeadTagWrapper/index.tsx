import Head from 'next/head'
import { NextHeadTagWrapperProps } from './type'
import React from 'react'

const NextHeadTagWrapper = ({
  title,
  useBaseTitle = true,
}: NextHeadTagWrapperProps) => {
  const shopName = "گروه صنعتی انتخاب";

  const baseTitle =
    useBaseTitle && shopName ? (title ? ` | ${shopName}` : shopName) : "";
  const pageTitle = `${title} ${baseTitle}`;

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={`admin panel ${pageTitle}`} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
  );
};

export default NextHeadTagWrapper;
