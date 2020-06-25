import { useState } from "react";
import _ from "lodash";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
// import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Table from "@material-ui/core/Table";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import LinkSharpIcon from "@material-ui/icons/LinkSharp";

const useStyles = makeStyles((theme) => ({}));

export default function TableViewDbRecords({ list }) {
  const classes = useStyles();
  const listRender = list;
  return (
    <TableContainer component={Paper}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography>Thumbnail</Typography>
            </TableCell>
            <TableCell>
              <Typography>Id / Hash</Typography>
            </TableCell>
            <TableCell>
              <Typography>Imported Date</Typography>
            </TableCell>
            <TableCell>
              <Typography>Imported Path</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {listRender.map((item) => (
            <TableRow key={item._id}>
              <TableCell>
                <Typography>{item.sourceSquare}</Typography>
              </TableCell>
              <TableCell>
                <Typography>{item.hash}</Typography>
              </TableCell>
              <TableCell>
                <Typography>{item.importedDate}</Typography>
              </TableCell>
              <TableCell>
                <Typography>{item.importedPath}</Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
