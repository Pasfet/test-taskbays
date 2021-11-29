import { useDynamicSVGImport } from '../../hooks/useDynamicSVG';

interface IProps {
  name: string | any;
}

const Icon = ({ name }: IProps) => {
  const { SvgIcon, error, loading } = useDynamicSVGImport(name);

  if (error) {
    return <div>{error.message}</div>;
  }

  if (loading) {
    return <div>...loading</div>;
  }

  if (SvgIcon) {
    return <SvgIcon />;
  }

  return null;
};

export default Icon;
