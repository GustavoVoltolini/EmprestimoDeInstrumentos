import "./History.css"
import { IoIosSearch } from "react-icons/io";
import { FaFilter } from "react-icons/fa";
import { useState } from "react";

const History = () => {

    const [lend, setLend] = useState([
        {
            id: 1,
            instrument: "Paquimetro",
            colaborator: "Gustavo",
            name: "Joãozinho",
            machine: "Mazak 1600",
            date: 25 / 10 / 2026,
            states: false,
            action: "Devolver"
        },
        {
            id: 2,
            instrument: "Micrometro",
            colaborator: "Jose",
            name: "Maria",
            machine: "Youji 1600",
            date: 25 / 9 / 2026,
            states: false,
            action: "Devolver"
        }
    ])

    const addInstrument = (instrument, colaborator, name, machine, date) => {
        const newInstruments = [...lend,
        {
            id: Math.floor(Math.random() * 10000),
            instrument,
            colaborator,
            name,
            machine,
            date
        },
        ];
        setLend(newInstruments)
    };


    return (
        <div className="history">
            <div className="history-title">
                <h2>HISTÓRICO E CONTROLE DE EMPRÉSTIMOS</h2>
                <div className="header">
                    <div >
                        <div className="search">
                            <span className="icon">
                                <IoIosSearch />
                            </span>
                            <input type="text" placeholder="Buscar..." />
                        </div>
                    </div>
                    <div className="filter">
                        <span className="icon">
                            <FaFilter />
                        </span>
                        <select>
                            <option value="All">Todos</option>
                            <option value="lend">Emprestado</option>
                            <option value="returned">Devolvido</option>
                        </select>
                    </div>
                </div>
                <div className="table">
                    <table className="table-header">
                        <td className="table-column">
                            <tr>Instrumento</tr>
                        </td>
                        <td className="table-column">
                            <tr>Colaborador</tr>
                        </td>
                        <td className="table-column">
                            <tr>Ramal/Nome</tr>
                        </td>
                        <td className="table-column">
                            <tr>Máquina/Posto</tr>
                        </td>
                        <td className="table-column">
                            <tr>Data</tr>
                        </td>
                        <td className="table-column">
                            <tr>Status</tr>
                        </td>
                        <td className="table-column">
                            <tr>Ações</tr>
                        </td>
                    </table>
                    <table>

                    </table>
                </div>




            </div>
        </div >
    )
}

export default History