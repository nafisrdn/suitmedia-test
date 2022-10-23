import Filter from "./Filter";
import { HeaderStyled, ShowingPostCount, Filters } from "./Header.style";

export const SORT_BY_NEWEST = 0,
  SORT_BY_OLDEST = 1;

const showPerPageValues = [
  { text: "10", value: "10" },
  { text: "20", value: "20" },
  { text: "50", value: "50" },
];

const sortByValues = [
  { text: "Newest", value: SORT_BY_NEWEST },
  { text: "Oldest", value: SORT_BY_OLDEST },
];

const Header = () => {
  return (
    <HeaderStyled className="text-s mb-4">
      <ShowingPostCount>
        <span>Showing 1 - 10 of 100</span>
      </ShowingPostCount>

      <Filters>
        <Filter
          label="Show per page"
          items={showPerPageValues}
          onChange={() => {}}
        />

        <Filter label="Sort by" items={sortByValues} onChange={() => {}} />
      </Filters>
    </HeaderStyled>
  );
};

export default Header;
