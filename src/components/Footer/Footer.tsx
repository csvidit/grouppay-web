import InlineLink from "../Links/InlineLink"

const Footer = () => {
  return (
    <footer className="w-full bottom-4 lg:bottom-6 self-center">
      <div className="rounded-md m-4 lg:m-6 px-8 py-4 grid grid-flow-row lg:grid-flow-col gap-6 lg:gap-12 border border-neutral-800 text-sm">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col text-base">
            <div className="text-emerald-500 flex flex-row gap-1 items-center text-lg lg:text-xl">
              <p className="extended">GroupPay</p>
            </div>
            <div className="font-medium">
              A Vidit Khandelwal project
            </div>
          </div>
          <div className="flex flex-col gap-2 text-sm">
            <div>Built using Next.js</div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="font-medium text-base text-emerald-500">
            More about Vidit Khandelwal
          </div>
          <InlineLink plain href="https://viditkhandelwal.com">
            Portfolio
          </InlineLink>
          <InlineLink plain href="https://github.com/csvidit">
            GitHub
          </InlineLink>
          <InlineLink plain href="https://linkedin.com/in/viditkhandelwal">
            LinkedIn
          </InlineLink>
          <InlineLink plain href="https://twitter.com/csvidit">
            X
          </InlineLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
