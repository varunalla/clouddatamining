import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./common/Header";
import NoMatch from "./common/NoMatch";
import DashboardPrimary from "./dashboards/DashboardPrimary";


const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Header />}>
                <Route index element={<DashboardPrimary />} />

                {/*  <Route path="about" element={<About />} /> 
                Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
                <Route path="*" element={<NoMatch />} />
            </Route>
        </Routes>
    );
}
export default Routers;