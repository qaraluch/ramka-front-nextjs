import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { Storage } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  paper: {
    marginTop: theme.spacing(3),
    width: "100%",
    overflowX: "auto",
    marginBottom: theme.spacing(2)
  },
  table: {
    minWidth: 650
  }
}));

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

function TableHeaderDB({ tableTilte }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Typography variant="h5" component="h5" gutterBottom>
            {tableTilte}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
//TODO: implement Table Header with icon
// <Storage />
// <TableHeaderDB tableTilte="All DB entries" />

export default function TableDBRecords({ db }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Typography variant="h5" component="h5" gutterBottom>
          All DB Entries
        </Typography>
        <Table
          className={classes.table}
          size="small"
          aria-label="a dense table"
        >
          <TableHead>
            <TableRow>
              <StyledTableCell>L.p.</StyledTableCell>
              <StyledTableCell>Imported Date</StyledTableCell>
              <StyledTableCell>Ext.</StyledTableCell>
              <StyledTableCell>Image Date</StyledTableCell>
              <StyledTableCell>Imported Path</StyledTableCell>
              <StyledTableCell>Image Year</StyledTableCell>
              <StyledTableCell>Hash</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {db.map((itm, idx) => (
              <TableRow key={itm.id}>
                <TableCell component="th" scope="row">
                  {idx + 1}
                </TableCell>
                <TableCell>{itm.doc.importedDate}</TableCell>
                <TableCell>{itm.doc.fileMetadata.ext}</TableCell>
                <TableCell>{itm.doc.parsedFileName.date}</TableCell>
                <TableCell>{itm.doc.importedPath}</TableCell>
                <TableCell>{itm.doc.parsedFileName.year}</TableCell>
                <TableCell>{itm.doc.hash}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
}
