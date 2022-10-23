import Dropdown from "../Dropdown";

const Filter = ({label, items, onChange}) => {
  return (
    <div>
      <span>{label}: </span>
      <Dropdown
        items={items}
        onChange={onChange}
      />
    </div>
  );
};

export default Filter;
