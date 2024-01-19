import AdmBox from "#app/components/AdmBox";
import AdmTypography from "#app/components/AdmTypography";
import AdmAvatar from "#app/components/AdmAvatar";
import AdmBadge from "#app/components/AdmBadge";

import avatar1 from "#app/assets/admin-images/avatar1.png";
import avatar2 from "#app/assets/admin-images/avatar2.png";
import avatar3 from "#app/assets/admin-images/avatar3.png";
import avatar4 from "#app/assets/admin-images/avatar4.png";
import avatar5 from "#app/assets/admin-images/avatar5.png";
import avatar6 from "#app/assets/admin-images/avatar6.png";

function Author({ image, name, email }) {
  return (
    <AdmBox display="flex" alignItems="center" px={1} py={0.5}>
      <AdmBox mr={2}>
        <AdmAvatar src={image} alt={name} size="sm" variant="rounded" />
      </AdmBox>
      <AdmBox display="flex" flexDirection="column">
        <AdmTypography variant="button" color="white" fontWeight="medium">
          {name}
        </AdmTypography>
        <AdmTypography variant="caption" color="text">
          {email}
        </AdmTypography>
      </AdmBox>
    </AdmBox>
  );
}

function Function({ job, org }) {
  return (
    <AdmBox display="flex" flexDirection="column">
      <AdmTypography variant="caption" fontWeight="medium" color="white">
        {job}
      </AdmTypography>
      <AdmTypography variant="caption" color="text">
        {org}
      </AdmTypography>
    </AdmBox>
  );
}

export default {
  columns: [
    { name: "author", align: "left" },
    { name: "function", align: "left" },
    { name: "status", align: "center" },
    { name: "employed", align: "center" },
    { name: "action", align: "center" },
  ],

  rows: [
    {
      author: <Author image={avatar4} name="Esthera Jackson" email="esthera@simmmple.com" />,
      function: <Function job="Manager" org="Organization" />,
      status: (
        <AdmBadge
          variant="standard"
          badgeContent="Online"
          color="success"
          size="xs"
          container
          sx={({ palette: { white, success }, borders: { borderRadius, borderWidth } }) => ({
            background: success.main,
            border: `${borderWidth[1]} solid ${success.main}`,
            borderRadius: borderRadius.md,
            color: white.main,
          })}
        />
      ),
      employed: (
        <AdmTypography variant="caption" color="white" fontWeight="medium">
          23/04/18
        </AdmTypography>
      ),
      action: (
        <AdmTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          Edit
        </AdmTypography>
      ),
    },
    {
      author: <Author image={avatar2} name="Alexa Liras" email="alexa@simmmple.com" />,
      function: <Function job="Programator" org="Developer" />,
      status: (
        <AdmBadge
          variant="standard"
          badgeContent="Offline"
          size="xs"
          container
          sx={({ palette: { white }, borders: { borderRadius, borderWidth } }) => ({
            background: "unset",
            border: `${borderWidth[1]} solid ${white.main}`,
            borderRadius: borderRadius.md,
            color: white.main,
          })}
        />
      ),
      employed: (
        <AdmTypography variant="caption" color="white" fontWeight="medium">
          11/01/19
        </AdmTypography>
      ),
      action: (
        <AdmTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          Edit
        </AdmTypography>
      ),
    },
    {
      author: <Author image={avatar3} name="Laurent Michael" email="laurent@simmmple.com" />,
      function: <Function job="Executive" org="Projects" />,
      status: (
        <AdmBadge
          variant="standard"
          badgeContent="Online"
          color="success"
          size="xs"
          container
          sx={({ palette: { white, success }, borders: { borderRadius, borderWidth } }) => ({
            background: success.main,
            border: `${borderWidth[1]} solid ${success.main}`,
            borderRadius: borderRadius.md,
            color: white.main,
          })}
        />
      ),
      employed: (
        <AdmTypography variant="caption" color="white" fontWeight="medium">
          19/09/17
        </AdmTypography>
      ),
      action: (
        <AdmTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          Edit
        </AdmTypography>
      ),
    },
    {
      author: <Author image={avatar1} name="Freduardo Hill" email="freduardo@simmmple.com" />,
      function: <Function job="Programator" org="Developer" />,
      status: (
        <AdmBadge
          variant="standard"
          badgeContent="Online"
          color="success"
          size="xs"
          container
          sx={({ palette: { white, success }, borders: { borderRadius, borderWidth } }) => ({
            background: success.main,
            border: `${borderWidth[1]} solid ${success.main}`,
            borderRadius: borderRadius.md,
            color: white.main,
          })}
        />
      ),
      employed: (
        <AdmTypography variant="caption" color="white" fontWeight="medium">
          24/12/08
        </AdmTypography>
      ),
      action: (
        <AdmTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          Edit
        </AdmTypography>
      ),
    },
    {
      author: <Author image={avatar5} name="Daniel Thomas" email="daniel@simmmple.com" />,
      function: <Function job="Manager" org="Executive" />,
      status: (
        <AdmBadge
          variant="standard"
          badgeContent="Offline"
          size="xs"
          container
          sx={({ palette: { white }, borders: { borderRadius, borderWidth } }) => ({
            background: "unset",
            border: `${borderWidth[1]} solid ${white.main}`,
            borderRadius: borderRadius.md,
            color: white.main,
          })}
        />
      ),
      employed: (
        <AdmTypography variant="caption" color="white" fontWeight="medium">
          04/10/21
        </AdmTypography>
      ),
      action: (
        <AdmTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          Edit
        </AdmTypography>
      ),
    },
    {
      author: <Author image={avatar6} name="Mark Wilson" email="mark@simmmple.com" />,
      function: <Function job="Programtor" org="Developer" />,
      status: (
        <AdmBadge
          variant="standard"
          badgeContent="Offline"
          size="xs"
          container
          sx={({ palette: { white }, borders: { borderRadius, borderWidth } }) => ({
            background: "unset",
            border: `${borderWidth[1]} solid ${white.main}`,
            borderRadius: borderRadius.md,
            color: white.main,
          })}
        />
      ),
      employed: (
        <AdmTypography variant="caption" color="white" fontWeight="medium">
          14/09/20
        </AdmTypography>
      ),
      action: (
        <AdmTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          Edit
        </AdmTypography>
      ),
    },
  ],
};
