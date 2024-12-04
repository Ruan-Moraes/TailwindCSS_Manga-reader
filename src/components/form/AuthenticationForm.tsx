import CustomLinkBase from '../links/elements/CustomLinkBase';

interface IAuthenticationForm {
  title: string;
  helperText?: string;
  onFormSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  linkText?: string;
  href?: string;
  children: React.ReactNode;
}

const AuthenticationForm = ({
  title,
  onFormSubmit,
  helperText,
  linkText,
  href,
  children,
}: IAuthenticationForm) => {
  return (
    <div className="flex flex-col gap-2">
      <div>
        <form onSubmit={onFormSubmit}>
          <fieldset className="flex flex-col gap-6 p-4 border-2 rounded-sm border-tertiary">
            <legend className="px-2 text-lg font-bold text-shadow-highlight">
              {title}
            </legend>
            {children}
          </fieldset>
        </form>
      </div>
      {helperText && linkText && href && (
        <div>
          <p className="text-sm text-center text-tertiary-default">
            {helperText}{' '}
            <CustomLinkBase
              href={href}
              text={linkText}
              otherStyles={{
                textDecoration: 'underline',
              }}
            />
          </p>
        </div>
      )}
    </div>
  );
};

export default AuthenticationForm;