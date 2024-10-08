import React from "react";
import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LinkIcon from "@mui/icons-material/Link";
import "./index.css";

// Helper function to format blog URLs
const formatBlogUrl = (url) => {
  if (!url) return { fullUrl: "", domain: "" };
  const fullUrl = url.startsWith("http") ? url : `http://${url}`;
  const domain = fullUrl.replace(/^(https?:\/\/)?(www\.)?/, "").split("/")[0];
  return { fullUrl, domain };
};

function Cards({ user }) {
  const { fullUrl, domain } = formatBlogUrl(user.blog);

  return (
    <Card
      className="profile-card"
      sx={{
        backgroundColor: "rgb(13, 17, 23, 50%)",
        borderColor: "rgb(108, 111, 115, 50%)",
      }}
    >
      <div className="profile-header">
        <AspectRatio ratio="1" className="profile-avatar">
          <img
            src={user.avatar_url}
            alt={`${user.name || user.login}'s GitHub Avatar`}
            className="avatar-img"
          />
        </AspectRatio>

        <div className="profile-info">
          <Typography
            level="p"
            fontSize="20px"
            className="profile-name"
            sx={{ color: "#E8E8E8" }}
          >
            {user.name || user.login}
          </Typography>
          <Typography
            level="body1"
            fontSize="14px"
            className="profile-handle"
            sx={{ color: "#9198A1" }}
          >
            @{user.login}
          </Typography>
          {user.location && (
            <Typography
              level="body2"
              fontSize="14px"
              className="profile-location"
              sx={{ color: "#9198A1" }}
            >
              <LocationOnIcon
                sx={{
                  fontSize: "15px",
                  verticalAlign: "middle",
                  marginRight: "4px",
                }}
              />
              {user.location}
            </Typography>
          )}
          {user.blog && (
            <Typography
              level="body2"
              fontSize="14px"
              className="profile-website"
              sx={{ color: "#9198A1" }}
            >
              <LinkIcon
                sx={{
                  fontSize: "15px",
                  verticalAlign: "middle",
                  marginRight: "4px",
                }}
              />
              <a
                href={fullUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#9198A1", textDecoration: "none" }}
              >
                {domain}
              </a>
            </Typography>
          )}
        </div>
      </div>

      <div className="profile-stats">
        <div>
          <Typography
            fontSize="16px"
            className="stats-number"
            sx={{ color: "#E8E8E8" }}
          >
            {user.public_repos}
          </Typography>
          <Typography
            fontSize="14px"
            className="stats-label"
            sx={{ color: "#9198A1" }}
          >
            repositories
          </Typography>
        </div>
        <div>
          <Typography
            fontSize="16px"
            className="stats-number"
            sx={{ color: "#E8E8E8" }}
          >
            {user.followers}
          </Typography>
          <Typography
            fontSize="14px"
            className="stats-label"
            sx={{ color: "#9198A1" }}
          >
            followers
          </Typography>
        </div>
        <div>
          <Typography
            fontSize="16px"
            className="stats-number"
            sx={{ color: "#E8E8E8" }}
          >
            {user.following}
          </Typography>
          <Typography
            fontSize="14px"
            className="stats-label"
            sx={{ color: "#9198A1" }}
          >
            following
          </Typography>
        </div>
      </div>

      <Button
        variant="solid"
        fullWidth
        size="md"
        className="profile-button"
        onClick={() =>
          window.open(`https://github.com/${user.login}`, "_blank")
        }
      >
        View Profile
      </Button>
    </Card>
  );
}

export default Cards;
