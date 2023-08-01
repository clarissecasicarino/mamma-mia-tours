import React, { ReactElement } from "react";
import Link from "next/link";
import { FaInstagram, FaFacebookSquare } from "react-icons/fa";

function Footer(): ReactElement {
  return (
    <>
      <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-200" />
      <footer className="py-6 text-left font-body desktop:mx-52">
        <div className="container px-6 tablet:px-8 laptop:px-10 grid grid-cols-2 gap-8">
          <div>
            <h1 className="font-semibold text-14">About the Company</h1>
            <ul className="space-y-3 pt-6 text-12">
              <li className="hover:text-primaryPurple">
                <Link href="/about">About Us</Link>
              </li>
              <li className="hover:text-primaryPurple">
                <Link href="/privacypolicy">Privacy Policy</Link>
              </li>
            </ul>
          </div>

          <div>
            <h1 className="font-semibold text-14">Help and Information</h1>
            <ul className="space-y-3 pt-6 text-12">
              <li className="hover:text-primaryPurple">
                <Link href="/contact">Contact Us</Link>
              </li>
              <li className="hover:text-primaryPurple">
                <Link href="/terms-and-conditions">Terms & Conditions</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col tablet:flex-row text-12 justify-start tablet:justify-center tablet:items-center container px-6 tablet:px-8 laptop:px-10 pt-6">
          <p className="flex text-left mr-auto">
            © 2023 Mamma Mia Tours. All rights reserved.
          </p>
          <div className="flex pt-2 gap-x-2">
            <IconLink
              IconComponent={FaInstagram}
              href="https://www.instagram.com/"
            />
            <IconLink
              IconComponent={FaFacebookSquare}
              href="https://www.facebook.com/"
            />
          </div>
        </div>
      </footer>
    </>
  );
}

function IconLink<E>({
  IconComponent,
  href,
}: {
  IconComponent: React.ComponentType<React.SVGProps<E>>;
  href: string;
}): ReactElement {
  return (
    <a href={href} className="flex h-4">
      <IconComponent className="m-auto h-4 w-4 hover:text-primaryPurple" />
    </a>
  );
}

export default Footer;
