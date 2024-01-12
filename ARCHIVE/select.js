import { Select, Spin } from "antd";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const ApexShopSelect = ({
  setSelectedShopId,
  selectedShopId,
  onChange,
  style,
}) => {
  const [shopLoading, setShopLoading] = useState(false);
  const [options, setOptions] = useState([]);

  const shopListData = useSelector((state) => state.shop.shopListData.data);

  console.log("shopListData", shopListData);

  useEffect(() => {
    // Update the options when shopListData changes
    if (shopListData) {
      const newOptions = [
        ...//     Array.isArray(shopListData) &&
        //   shopListData.length > 0 &&
        ((Array.isArray(shopListData) &&
          shopListData?.map((item) => ({
            label: item.shopName,
            value: item._id,
          }))) ||
          []),
        ...(shopLoading
          ? [
              {
                label: (
                  <div style={{ cursor: "none" }} disabled>
                    <Spin />
                  </div>
                ),
                value: "loading",
              },
            ]
          : []),
      ];
      setOptions(newOptions);
    }
  }, [shopListData, shopLoading]);

  return (
    <div>
      <Select
        showSearch
        placeholder="Select Shop"
        allowClear
        loading={shopLoading}
        // onChange={(value) => {
        //   setSelectedShopId(value ? value : "");
        // }}
        onChange={onChange}
        optionFilterProp="children"
        filterOption={(input, option) => {
          if (option.value === "loading") {
            return true;
          } else {
            return (option?.label ?? "")
              .toLowerCase()
              .includes(input.toLowerCase());
          }
        }}
        style={style}
        options={options}
      />
    </div>
  );
};

export default ApexShopSelect;
