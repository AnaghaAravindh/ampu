import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

const Tablename = () => {
    var pname=[{name:"Anagha",age:19,place:"irinjalakuda"},
{name:"abi",age:"16",place:"kdlr"},
{name:"achu",age:"12",place:"ijk"}]
     return (
    <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Age</TableCell>
                    <TableCell>Place</TableCell>
                </TableRow>
            </TableHead> 
            <TableBody>
                {pname.map((value,index)=>{
                    return<TableRow>
                        <TableCell key={index}>{value.name}</TableCell>
                        <TableCell key={index}>{value.age}</TableCell>
                        <TableCell key={index}>{value.place}</TableCell>
                    </TableRow>
                })}
            </TableBody>
        </Table>
    </TableContainer>
     )
}


export default Tablename
