import "./Register.css"
import { FaTools } from "react-icons/fa";

const Register = () => {
    return (
        <div className="main">
            <h2>REGISTRAR NOVO EMPRÉSTIMO</h2>
            <form className="form-emprestimo">
                <div className="form-row">
                    <div className="form-group">
                        <label>Instrumento</label>
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
                        <label>Colaborador</label>
                        <select name="collaborator" defaultValue="">
                            <option value="" disabled hidden>Selecionar colaborador...</option>
                            <option value="gustavo">Gustavo</option>
                            <option value="maria">Maria</option>
                        </select>
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label>Máquina</label>
                        <select name="select-machine" defaultValue="">
                            <option value="" disabled hidden>Selecionar Máquina...</option>
                            <option value="hwacheon">Hwacheon</option>
                            <option value="mazak">Mazak</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label className="data">Data</label>
                        <input type="date" />
                    </div>

                    <div className="form-group">
                        <label>Observações / Ramal</label>
                        <input type="text" placeholder="Digite os detalhes..." />
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