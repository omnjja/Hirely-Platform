import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./../ui/Sidebar";
import { Menu } from "lucide-react";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { menuItems } from "@/constants/recruiterRegistrationEnums";
import MainHeader from "../ui/MainHeader";
import { Box, Grid } from "@mui/material";
import Card from "../ui/Card";

const RecruiterLayout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  const drawerOpen = isOpen && !isDesktop;
  return (
    <div className="w-full flex min-h-screen">
      <div className="hidden lg:block">
        <Sidebar menuItems={menuItems} />
      </div>
      {drawerOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div className="w-40 shadow-xl">
            <Sidebar menuItems={menuItems} isMobile setIsOpen={setIsOpen} />
          </div>
          <div
            className="bg-black/40 w-full"
            onClick={() => setIsOpen(false)}
          />
        </div>
      )}

      <div className="flex-1 w-full">
        <div className="bg-white sticky top-0 left-0 z-10 flex items-center sm:gap-5 lg:justify-between p-4 border-b border-gray-100 shadow-sm">
          <button
            className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition"
            onClick={() => setIsOpen(true)}
          >
            <Menu />
          </button>
          <MainHeader />
        </div>

        <Box sx={{ flexGrow: 1 }} className="w-full min-h-screen">
          <Grid container spacing={10} className="w-full min-h-screen">
            <Grid
              size={{ xs: 12, lg: 9 }}
              className="flex-1 flex flex-col gap-9 "
            >
              <div>
                <Outlet />
              </div>
            </Grid>
            {/* AI Card */}
            <Grid size={{ xs: 12, lg: 3 }}>
              <Card className="p-4 sm:p-5 lg:sticky lg:top-20">
                <p className="text-sm font-medium text-gray-500 mb-4 flex items-center gap-2">
                  ? AI Card
                </p>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  );
};

export default RecruiterLayout;
