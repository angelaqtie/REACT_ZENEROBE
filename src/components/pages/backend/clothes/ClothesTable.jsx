import { StoreContext } from '@/components/store/storeContext';
import React from 'react'
import { clothes } from '../clothes-data';
import Pills from '../partials/Pills';
import { Archive, ArchiveRestore, FilePenLine, Trash2 } from 'lucide-react';
import LoadMore from '../partials/LoadMore';
import { setIsAdd, setIsConfirm, setIsDelete } from '@/components/store/storeAction';
import ModalConfirm from '../partials/modals/ModalConfirm';
import ModalDelete from '../partials/modals/ModalDelete';

const ClothesTable = ({ setItemEdit }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  let counter = 1;

  const handleEdit = (item) => {
    dispatch(setIsAdd(true));
    setItemEdit(item);
  };
  const handleDelete = () => {
    dispatch(setIsDelete(true));
  };
  const handleRestore = () => {
    dispatch(setIsConfirm(true));
  };
  const handleArchive = () => {
    dispatch(setIsConfirm(true));
  };
  return (
    <>
      <div className="p-4 bg-secondary mt-10 rounded-md border border-line relative">
        {/* <SpinnerTable /> */}
        <div className="table-wrapper custom-scroll">
          {/* <TableLoader count={20} cols={4} /> */}
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
              {/* <tr>
              <td colSpan={100}>
                <IconNoData />
              </td>
            </tr> */}

              {/* <tr>
              <td colSpan={100}>
                <IconServerError />
              </td>
            </tr> */}
              {clothes.map((item, key) => (
                <tr key={key}>
                  <td>{counter++}</td>
                  <td>
                    <Pills />
                  </td>
                  <td>{item.clothes_title}</td>
                  <td>{item.clothes_price}</td>
                  <td>{item.clothes_category}</td>

                  <td>
                    <ul className="table-action">
                      {true ? (
                        <>
                          <li>
                            <button
                              className="tooltip"
                              data-tooltip="Edit"
                              onClick={() => handleEdit(item)}
                            >
                              <FilePenLine />
                            </button>
                          </li>
                          <li>
                            <button
                              className="tooltip"
                              data-tooltip="Archive"
                              onClick={handleArchive}
                            >
                              <Archive />
                            </button>
                          </li>
                        </>
                      ) : (
                        <>
                          <li>
                            <button
                              className="tooltip"
                              data-tooltip="Restore"
                              onClick={() => handleRestore()}
                            >
                              <ArchiveRestore />
                            </button>
                          </li>
                          <li>
                            <button
                              className="tooltip"
                              data-tooltip="Delete"
                              onClick={() => handleDelete()}
                            >
                              <Trash2 />
                            </button>
                          </li>
                        </>
                      )}
                    </ul>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <LoadMore />
        </div>
      </div>

      {store.isDelete && <ModalDelete />}
      {store.isConfirm && <ModalConfirm />}
    </>
  );
};

export default ClothesTable