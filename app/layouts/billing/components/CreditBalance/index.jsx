import React from "react";

import { Card, Stack } from "@mui/material";

import balance from "remix/assets/admin-images/billing-background-balance.png";
import Graph from "remix/assets/admin-images/shapes/graph-billing.svg";

import palette from "remix/assets/admin-theme/base/colors";

import AdmBox from "remix/components/AdmBox";
import AdmTypography from "remix/components/AdmTypography";

import { FaEllipsisH } from "react-icons/fa";
import { MdOutlineDomain } from "react-icons/md";

const CreditBalance = () => {
  return (
    <Card sx={{ padding: "30px" }}>
      <AdmBox display="flex" flexDirection="column">
        <AdmBox
          mb="32px"
          p="20px"
          display="flex"
          flexDirection="column"
          sx={{ backgroundImage: `url(${balance})`, backgroundSize: "cover", borderRadius: "18px" }}
        >
          <AdmBox display="flex" justifyContent="space-beetween" alignItems="center">
            <AdmTypography variant="caption" color="white" fontWeight="medium" mr="auto">
              Credit Balance
            </AdmTypography>
            <FaEllipsisH color="white" size="18px" sx={{ cursor: "pointer" }} />
          </AdmBox>
          <AdmBox display="flex" justifyContent="space-beetween" alignItems="center">
            <AdmTypography variant="h2" color="white" fontWeight="bold" mr="auto">
              $25,215
            </AdmTypography>
            <AdmBox component="img" src={Graph} sx={{ width: "58px", height: "20px" }} />
          </AdmBox>
        </AdmBox>
        <AdmTypography color="text" variant="xxs" fontWeight="medium" mb="8px">
          NEWEST
        </AdmTypography>
        <AdmBox display="flex" justifyContent="space-beetween" alignItems="center">
          <Stack direction="row" spacing="10px" mr="auto">
            <AdmBox
              display="flex"
              mr="10px"
              justifyContent="center"
              alignItems="center"
              sx={{
                background: "rgba(34, 41, 78, 0.7)",
                borderRadius: "50%",
                width: "42px",
                height: "42px",
              }}
            >
              <MdOutlineDomain color={palette.success.main} size="20px" />
            </AdmBox>
            <AdmBox display="flex" flexDirection="column">
              <AdmTypography color="white" variant="button" fontWeight="medium">
                Bill & Taxes
              </AdmTypography>
              <AdmTypography color="text" variant="button" fontWeight="medium">
                Today, 16:36
              </AdmTypography>
            </AdmBox>
          </Stack>
          <AdmTypography variant="button" color="white" fontWeight="bold">
            -$154.50
          </AdmTypography>
        </AdmBox>
      </AdmBox>
    </Card>
  );
};

export default CreditBalance;
