import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { CCard } from "@coreui/react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function AddUser() {
  const navigate = useNavigate();

  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (nama === "" || email === "" || password === "") {
      alert("Data Gagal ditambahkan, field tidak boleh ada yang kosong");
    } else {
      try {
        const headers = {
          'Content-Type': 'application/json',
          
        };

        await axios.post('http://localhost:8080/user/', {
          nama: nama,
          email: email,
          password: password
        }, {
          headers: headers
        });

        // Gunakan fungsi navigate dari useNavigate untuk navigasi
        navigate('/user');

        alert("Data berhasil ditambahkan");
      } catch (error) {
        console.error("Error:", error);
        alert("Terjadi kesalahan saat menambahkan data");
      }
    }
  };

  return (
    <div className="body-flex">
      <div className="flex">
        <div className="col-10 p-5">
          <h1 className="py-1">Form Tambah Data User</h1>
          <CCard className="mb-4 p-5">
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Nama User</Form.Label>
                <Form.Control
                  type="text"
                  name="nama"
                  autoFocus
                  value={nama}
                  onChange={(e) => setNama(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="text"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="text"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <Button type="submit" className="col-12 px-4 btn btn-success">
                Submit
              </Button>
            </Form>
          </CCard>
        </div>
      </div>
    </div>
  );
}

export default AddUser;
