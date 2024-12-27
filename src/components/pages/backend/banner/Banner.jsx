import React from "react";
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import SideNavigation from "../partials/SideNavigation";
import Searchbar from "../partials/Searchbar";
import { Plus } from "lucide-react";
import { StoreContext } from "@/components/store/storeContext";
import { setIsAdd } from "@/components/store/storeAction";
import ToastSuccess from "../partials/ToastSuccess";
import ModalValidation from "../partials/modals/ModalValidation";
import ModalError from "../partials/modals/ModalError";
import BannerTable from "./BannerTable";
import ModalAddBanner from "./ModalAddBanner";

const Banner = () => {
  const { dispatch, store } = React.useContext(StoreContext);
  const [isAdsEdit, setIsAdsEdit] = React.useState(null);
  
  const handleAdd = () => {
    dispatch(setIsAdd(true));
    setIsAdsEdit(null);
  };
  return (
    <>
      <section className="layout-main ">
        <div className="layout-division ">
          <SideNavigation menu="banner" />
          <main>
            <Header title="Banner" subtitle="Manage Kiosk Banner" />
            <div className="p-8">
              <div className="flex justify-between items-center">
                <div></div>
                <button className="btn btn-add" onClick={handleAdd}>
                  <Plus size={16} /> Add New
                </button>
              </div>

              <BannerTable  setIsAdsEdit={setIsAdsEdit}/>
            </div>

            <Footer />
          </main>
        </div>
      </section>
      {store.validate && <ModalValidation />}
      {/* {store.error && <ModalError />} */}
      {store.success && <ToastSuccess />}
      {store.isAdd && (
        <ModalAddBanner  setIsAdsEdit={setIsAdsEdit} isAdsEdit={isAdsEdit}/>
      ) }
    </>
  );
};

export default Banner;
