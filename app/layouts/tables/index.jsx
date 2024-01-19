import Card from "@mui/material/Card";

import AdmBox from "#app/components/AdmBox";
import AdmTypography from "#app/components/AdmTypography";

import DashboardLayout from "#app/admin-examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "#app/admin-examples/Navbars/DashboardNavbar";
import Footer from "#app/admin-examples/Footer";
import Table from "#app/admin-examples/Tables/Table";

import authorsTableData from "./data/authorsTableData";
import projectsTableData from "./data/projectsTableData";

function Tables() {
  const { columns, rows } = authorsTableData;
  const { columns: prCols, rows: prRows } = projectsTableData;

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <AdmBox py={3}>
        <AdmBox mb={3}>
          <Card>
            <AdmBox display="flex" justifyContent="space-between" alignItems="center" mb="22px">
              <AdmTypography variant="lg" color="white">
                Authors table
              </AdmTypography>
            </AdmBox>
            <AdmBox
              sx={{
                "& th": {
                  borderBottom: ({ borders: { borderWidth }, palette: { grey } }) =>
                    `${borderWidth[1]} solid ${grey[700]}`,
                },
                "& .MuiTableRow-root:not(:last-child)": {
                  "& td": {
                    borderBottom: ({ borders: { borderWidth }, palette: { grey } }) =>
                      `${borderWidth[1]} solid ${grey[700]}`,
                  },
                },
              }}
            >
              <Table columns={columns} rows={rows} />
            </AdmBox>
          </Card>
        </AdmBox>
        <Card>
          <AdmBox display="flex" justifyContent="space-between" alignItems="center">
            <AdmTypography variant="lg" color="white">
              Projects table
            </AdmTypography>
          </AdmBox>
          <AdmBox
            sx={{
              "& th": {
                borderBottom: ({ borders: { borderWidth }, palette: { grey } }) =>
                  `${borderWidth[1]} solid ${grey[700]}`,
              },
              "& .MuiTableRow-root:not(:last-child)": {
                "& td": {
                  borderBottom: ({ borders: { borderWidth }, palette: { grey } }) =>
                    `${borderWidth[1]} solid ${grey[700]}`,
                },
              },
            }}
          >
            <Table columns={prCols} rows={prRows} />
          </AdmBox>
        </Card>
      </AdmBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Tables;
