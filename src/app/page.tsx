'use client'

import React, {FC} from "react";
import Link from "next/link";

const Page : FC = () => {
  return (
    <div>
      <Link href="/home">home</Link>
    </div>
  );
}

export default Page;