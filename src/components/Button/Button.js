import { LoadMoreButton } from './Button.styled';

export const Button = ({ onLoadMore }) => {
  return (
    <LoadMoreButton type="submit" onClick={onLoadMore}>
      Load More
    </LoadMoreButton>
  );
};
