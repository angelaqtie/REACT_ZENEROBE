import { StoreContext } from "@/components/store/storeContext";
import React from "react";
import { clothes } from "../clothes-data";
import { Archive, ArchiveRestore, FilePenLine, Trash2 } from "lucide-react";
import LoadMore from "../partials/LoadMore";
import {
  setIsAdd,
  setIsArchive,
  setIsConfirm,
  setIsDelete,
  setIsRestore,
} from "@/components/store/storeAction";
import ModalConfirm from "../partials/modals/ModalConfirm";
import ModalDelete from "../partials/modals/ModalDelete";
import Status from "@/components/partials/Status";
import useQueryData from "@/components/custom-hook/useQueryData";
import ModalArchive from "@/components/partials/modal/ModalArchive";
import ModalRestore from "@/components/partials/modal/ModalRestore";
import { useInfiniteQuery } from "@tanstack/react-query";
import { queryDataInfinite } from "@/components/helpers/queryDataInfinite";
import { useInView } from "react-intersection-observer";
import SearchBarWithFilterStatus from "@/components/partials/SearchBarWithFilterStatus";
import TableLoader from "../partials/TableLoader";
import { FaArchive, FaEdit, FaTrash, FaTrashRestoreAlt } from "react-icons/fa";
import IconNoData from "../partials/IconNoData";

const ClothesTable = ({ setItemEdit }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [id, setIsId] = React.useState("");
  const [isFilter, setIsFilter] = React.useState(false);
  const [onSearch, setOnSearch] = React.useState(false);
  const search = React.useRef({ value: "" });
  const [statusFilter, setStatusFilter] = React.useState("");
  const [page, setPage] = React.useState(1);
  const { ref, inView } = useInView();

  let counter = 1;

  const handleEdit = (item) => {
    dispatch(setIsAdd(true));
    setItemEdit(item);
  };
  const handleDelete = (item) => {
    dispatch(setIsDelete(true));
    setIsId(item.clothes_aid);
  };
  const handleRestore = (item) => {
    dispatch(setIsRestore(true));
    setIsId(item.clothes_aid);
  };
  const handleArchive = (item) => {
    dispatch(setIsArchive(true));
    setIsId(item.clothes_aid);
  };

  // const {
  //   isLoading,
  //   isFetching,
  //   error,
  //   data: result,
  // } = useQueryData(
  //   `/v2/clothes`, // endpoint
  //   "get", // method
  //   "clothes"
  // );

  const {
     data: result,
     error,
     fetchNextPage,
     hasNextPage,
     isFetching,
     isFetchingNextPage,
     status,
   } = useInfiniteQuery({
     queryKey: ["clothes", onSearch, isFilter, statusFilter],
     queryFn: async ({ pageParam = 1 }) =>
       await queryDataInfinite(
         "/v2/clothes/search", // search or filter endpoint
         `/v2/clothes/page/${pageParam}`, // page api/endpoint
         isFilter || store.isSearch, // search boolean
         {
           isFilter,
           statusFilter,
           searchValue: search?.current.value,
           id: "",
         } // payload
       ),
     getNextPageParam: (lastPage) => {
       if (lastPage.page < lastPage.total) {
         return lastPage.page + lastPage.count;
       }
       return;
     },
     refetchOnWindowFocus: false,
   });
 
   React.useEffect(() => {
     if (inView) {
       setPage((prev) => prev + 1);
       fetchNextPage();
     }
   }, [inView]);


  return (
    <>
    <div>
      <SearchBarWithFilterStatus
      search={search}
      dispatch={dispatch}
      store={store}
      result={result}
      isFetching={isFetching}
      setOnSearch={setOnSearch}
      onSearch={onSearch}
      statusFilter={statusFilter}
      setStatusFilter={setStatusFilter}
      setIsFilter={setIsFilter}
      setPage={setPage}
      
      />
    </div>



      <div className="p-4 bg-secondary mt-10 rounded-md border border-line relative">
        {/* <SpinnerTable /> */}
        <div className="table-wrapper custom-scroll">
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Status</th>
                <th className="w-[50%]">Title</th>
                <th>Price</th>
                <th>Category</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {(status === "pending" || result?.pages[0].data.length === 0) && (
                 <tr>
                 <td colSpan={100} className="p-10">
                  {status === "pending" ? (
                    <TableLoader cols={4} count={4}/>

                  ) : (<IconNoData />)}
                   
                 </td>
               </tr>
              )}

             {error && (
              <tr>
              <td colSpan={100}>
                <IconServerError />
              </td>
            </tr>
             )}

            {result?.pages.map((page, pageKey) => (
                <React.Fragment key={pageKey}>
                  {page.data.map((item, key) => {
                    return (
                      <tr key={key} className="group relative cursor-pointer">
                        <td className="text-center">{counter++}</td>
                        <td>
                          {item.clothes_is_active ? (
                            <Status text={"Active"} />
                          ) : (
                            <Status text={"Inactive"} />
                          )}
                        </td>
                        <td>{item.clothes_title}</td>
                        <td>{item.clothes_price}</td>
                        <td>{item.category_title}</td>

                        <td
                          colSpan="100%"
                          className="opacity-0 group-hover:opacity-100"
                        >
                          <div className="flex items-center justify-end gap-2 mr-4">
                            {item.clothes_is_active == 1 ? (
                              <>
                                <button
                                  type="button"
                                  className="tool-tip"
                                  data-tooltip="Edit"
                                  disabled={isFetching}
                                  onClick={() => handleEdit(item)}
                                >
                                  <FaEdit />
                                </button>
                                <button
                                  type="button"
                                  className="tool-tip"
                                  data-tooltip="Archive"
                                  disabled={isFetching}
                                  onClick={() => handleArchive(item)}
                                >
                                  <FaArchive />
                                </button>
                              </>
                            ) : (
                              <>
                                <button
                                  type="button"
                                  className="tool-tip"
                                  data-tooltip="Restore"
                                  disabled={isFetching}
                                  onClick={() => handleRestore(item)}
                                >
                                  <FaTrashRestoreAlt/>
                                </button>
                                <button
                                  type="button"
                                  className="tool-tip"
                                  data-tooltip="Delete"
                                  disabled={isFetching}
                                  onClick={() => handleDelete(item)}
                                >
                                  <FaTrash />
                                </button>
                              </>
                            )}
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </React.Fragment>
              ))}

            </tbody> 
          </table>

          <div className="pb-10 flex items-center justify-center">
            <LoadMore
              fetchNextPage={fetchNextPage}
              isFetchingNextPage={isFetchingNextPage}
              hasNextPage={hasNextPage}
              result={result?.pages[0]}
              setPage={setPage}
              page={page}
              refView={ref}
            />
          </div>
        </div>
      </div>

      {store.isDelete && (
        <ModalDelete
          setIsDelete={setIsDelete}
          mysqlApiDelete={`/v2/clothes/${id}`}
          queryKey={"clothes"}
        />
      )}

      {store.isArchive && (
        <ModalArchive
        setIsArchive={setIsArchive}
        mysqlEndpoint={`/v2/clothes/active/${id}`}
        queryKey={"clothes"}
        />
      )}

      {store.isRestore && (
        <ModalRestore
          setIsRestore={setIsRestore}
          mysqlEndpoint={`/v2/clothes/active/${id}`}
          queryKey={"clothes"}
        />
      )}

      {store.isConfirm && <ModalConfirm />}
    </>
  );
};

export default ClothesTable;
