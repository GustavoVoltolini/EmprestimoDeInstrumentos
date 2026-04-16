import "./Register.css"
import { FaTools } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { MdBadge } from "react-icons/md";

const Register = () => {
    return (
        <div className="content">
            <h2>REGISTRAR NOVO EMPRÉSTIMO</h2>
            <form className="form-emprestimo">
                <div className="form-row">
                    <div className="form-group">
                        <label>Instrumento:</label>
                        <div className="input-group">
                            <span className="input-icon">
                                <FaTools />
                            </span>
                            <select name="instruments" defaultValue="">
                                <option value="" disabled hidden>Selecionar Instrumento...</option>
                                <option value="paquimetro">Paquímetro</option>
                                <option value="micrometro">Micrômetro</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Colaborador:</label>
                        <div className="input-group">
                            <span className="input-icon">
                                <FaUser />
                            </span>
                            <select name="collaborator" defaultValue="">
                                <option value="" disabled hidden>Selecionar colaborador...</option>
                                <option value="gustavo">Gustavo</option>
                                <option value="maria">Maria</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group label-machine">
                        <label>Máquina:</label>
                        <div className="input-group">
                            <span className="input-icon">
                                <FaGear />
                            </span>
                            <select name="select-machine" defaultValue="">
                                <option value="" disabled hidden>Selecionar Máquina...</option>
                                <option value="hwacheon">Hwacheon</option>
                                <option value="mazak">Mazak</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group label-data">
                        <label className="data">Data:</label>
                        <input type="date" />
                    </div>

                    <div className="form-group input-obs">
                        <label>Observações / Ramal:</label>
                        <div className="input-group">
                            <span className="input-icon">
                                <MdBadge />
                            </span>
                            <input type="text" placeholder="Digite os detalhes..." />
                        </div>
                    </div>
                </div>

                <div className="form-actions">
                    <button type="submit" className="btn-registrar">
                        REGISTRAR EMPRÉSTIMO
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Register