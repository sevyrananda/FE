import { React, useEffect, useState } from "react";
import axios from "axios";
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from "@coreui/react";
import "bootstrap/dist/css/bootstrap.min.css";

function DataUser() {
  const [data_login, setDataLogin] = useState([]);

  const GetDataLogin = async () => {
    const getData = await axios.get("http://localhost:8080/user/");
    setDataLogin(getData.data.data);
    console.log(getData);
  };
  useEffect(() => {
    GetDataLogin();
  }, []);
  return (
    <div className="body-flex">
      <div className="flex">
        <div className="col-10 p-5">
          <h1 className="py-1">Data User</h1>
          <div className="py-3">
            <CButton className="btn btn-success text-white me-2" href="add-user">
                Tambah Data
            </CButton>
          </div>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>Tabel User</strong>
            </CCardHeader>
            <CCardBody>
              <CTable striped>
                <CTableHead>
                  {/* <CTableRow>
                                <CTableHeaderCell scope="col">Nama</CTableHeaderCell>
                                <CTableHeaderCell scope="col">NIM</CTableHeaderCell>
                                <CTableHeaderCell scope="col">Alamat</CTableHeaderCell>
                                <CTableHeaderCell scope="col">Aksi</CTableHeaderCell>
                            </CTableRow> */}
                  <CTableRow>
                    <CTableHeaderCell scope="col">Nama</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Email</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Password</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {data_login.map((item, index) => {
                    return (
                      <CTableRow key={index}>
                        {/* <CTableDataCell> {item.nama} </CTableDataCell>
                                <CTableDataCell> {item.nim} </CTableDataCell>
                                <CTableDataCell> {item.alamat} </CTableDataCell> */}
                        <CTableDataCell> {item.nama} </CTableDataCell>
                        <CTableDataCell> {item.email} </CTableDataCell>
                        <CTableDataCell> {item.password} </CTableDataCell>

                        <CTableDataCell>
                          <CButton className="btn btn-primary text-white me-2">
                            Edit
                          </CButton>
                          <CButton className="btn btn-danger text-white">
                            Hapus
                          </CButton>
                        </CTableDataCell>
                      </CTableRow>
                    );
                  })}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </div>
      </div>
    </div>
  );
}
export default DataUser;
