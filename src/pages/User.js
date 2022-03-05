import React, { useState } from "react";
import { filter } from "lodash";
import Page from "components/Page";
import {
  Container,
  Stack,
  Typography,
  Button,
  Card,
  TableContainer,
  Table,
  TableBody,
  TableRow,
  Checkbox,
  TableCell,
  Avatar,
  TablePagination,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import Iconify from "components/Iconify";
import UserListToolbar from "sections/@dashboard/user/UserListToolbar";
import Scrollbar from "components/Scrollbar";
import UserListHead from "sections/@dashboard/user/UserListHead";
import { userLsit } from "_mocks_/user";
import Label from "components/Label";
import { sentenceCase } from "change-case";
import { UserMoreMenu } from "sections/@dashboard/user";
import SearchNotFound from "components/SearchNotFound";
const TABLE_HEAD = [
  { id: "name", label: "Name", alignRight: false },
  { id: "company", label: "Company", alignRight: false },
  { id: "role", label: "Role", alignRight: false },
  { id: "isValidated", label: "Validated", alignRight: false },
  { id: "status", label: "Status", alignRight: false },
  { id: "", label: "", alignRight: false },
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    // a before b
    return -1; // b before a
  }
  if (b[orderBy] > a[orderBy]) {
    // a before b
    return 1; // b is bigger
  }
  return 0; // a and b are equal
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy) // a before b
    : (a, b) => -descendingComparator(a, b, orderBy); // b before a
}

function applySortFilter(array, comparator, query) {
  // console.log(array, comparator, query);
  const stablizedThis = array.map((el, index) => [el, index]); // create a new array of [element, index]
  stablizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]); // order is -1 or 1
    if (order !== 0) return order; // a before b
    // if order is not 0, return order
    return a[1] - b[1]; // return index
  });

  if (query) {
    return filter(
      array,
      (user) => user.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
    );
  }
  return stablizedThis.map((el) => el[0]); // return only the elements
}

const User = () => {
  const [page, setpage] = useState(0);
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("name");
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [selected, setSelected] = useState([]);
  const [filterName, setFilterName] = useState("");
  const handleFilterByName = (e) => {
    setFilterName(e.target.value);
  };
  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };
  const handleSelectAllClick = (e) => {
    if (e.target.checked) {
      const newSelected = userLsit.map((n) => n.name);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };
  // console.log(selected);

  // *********************************console.log(getComparator(order, orderBy));************************

  const filteredUsers = applySortFilter(
    userLsit,
    getComparator(order, orderBy),
    filterName
  );

  const emptyRows =
    page > 0 ? Math.max(0, (page + 1) * rowsPerPage - userLsit.length) : 0;

  const isUerNotFound = filteredUsers.length === 0;

  const handleChangePage = (event, newPage) => {
    setpage(newPage); 
  };

  const handleChangeRowsPerPage = (e) => {
    setRowsPerPage(parseInt(e.target.value, 10));
    setpage(0);
  };
  return (
    <Page title="User | Minimal-UI">
      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          mb={5}
        >
          <Typography variant="h4" gutterBottom>
            User
          </Typography>
          <Button
            variant="contained"
            component={RouterLink}
            to="#"
            startIcon={<Iconify icon="eva:plus-fill" />}
          >
            New User
          </Button>
        </Stack>

        <Card>
          <UserListToolbar
            numSelected={selected.length}
            filterName={filterName}
            onFilterName={handleFilterByName}
          />

          <Scrollbar>
            <TableContainer sx={{ minWidth: 800 }}>
              <Table>
                <UserListHead
                  order={order}
                  orderBy={orderBy}
                  headLabel={TABLE_HEAD}
                  rowCount={userLsit.length}
                  numSelected={selected.length}
                  onRequestSort={handleRequestSort}
                  onSelectedAllClick={handleSelectAllClick}
                />
                <TableBody>
                  {filteredUsers
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => {
                      const {
                        id,
                        name,
                        role,
                        status,
                        company,
                        avatarUrl,
                        isVerified,
                      } = row;
                      // console.log(row);
                      const isItemSelected = selected.indexOf(name) !== -1;

                      return (
                        <TableRow
                          hover
                          key={id}
                          selected={isItemSelected}
                          aria-checked={isItemSelected}
                        >
                          <TableCell padding="checkbox">
                            <Checkbox
                              checked={isItemSelected}
                              onChange={() => handleClick(name)}
                            />
                          </TableCell>
                          <TableCell padding="none">
                            <Stack
                              direction="row"
                              alignItems="center"
                              spacing={2}
                            >
                              <Avatar alt={name} src={avatarUrl} />
                              <Typography variant="subtitle2" noWrap>
                                {name}
                              </Typography>
                            </Stack>
                          </TableCell>
                          <TableCell>{company}</TableCell>
                          <TableCell>{role}</TableCell>
                          <TableCell>{isVerified ? "Yes" : "No"}</TableCell>
                          <TableCell>
                            <Label
                              variant="ghost"
                              color={
                                (status === "banned" && "error") || "success"
                              }
                            >
                              {sentenceCase(status)}
                            </Label>
                          </TableCell>
                          <TableCell>
                            <UserMoreMenu />
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  {emptyRows > 0 && (
                    <TableRow sx={{ height: 53 * emptyRows }}>
                      <TableCell colSpan={6} />
                    </TableRow>
                  )}
                </TableBody>
                {isUerNotFound && (
                  <TableBody>
                    <TableRow>
                      <TableCell align="right" colSpan={6} sx={{ py: 3 }}>
                        <SearchNotFound searchQuery={filterName} />
                      </TableCell>
                    </TableRow>
                  </TableBody>
                )}
              </Table>
            </TableContainer>
          </Scrollbar>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={userLsit.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Card>
      </Container>
    </Page>
  );
};

export default User;
