import classNames from 'classnames';

type CardProps = {
  classes?: string;
  children?: React.ReactNode;
};

export default function Card({ children, classes } : CardProps) {
  return (
    <div className={classNames('px-4 py-6 rounded-md bg-gray-200 dark:bg-gray-800 inline-block', classes)}>
      {children}
    </div>
  )
}