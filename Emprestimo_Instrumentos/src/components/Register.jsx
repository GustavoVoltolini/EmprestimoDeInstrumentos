import "./Register.css"

const Register = () => {
    return (
        <div className="register-body">
            <div className="register-history-title">
                <h2>REGISTRAR NOVO EMPRESTIMO</h2>
                <div className="inputs">
                    <div className="inputs-esq">
                        <div className="instruments">
                            <h3>Instrumento</h3>
                            <select name="instruments" >
                                <option value="" disabled selected hidden>Selecione o instrumento...</option>
                                <option value="paquimetro">Paquimetro</option>
                                <option value="micrometro">Micrometro</option>
                            </select>
                        </div>
                        <div className="machine">
                            <h3>Máquina</h3>
                            <select name="select-machine" >
                                <option value="" disabled selected hidden>Selecionar Máquina...</option>
                                <option value="paquimetro">Hwacheon</option>
                                <option value="micrometro">Mazak</option>
                            </select>
                        </div>
                        <div className="data">
                            <h3>Data</h3>
                            <input type="date" />
                        </div>
                    </div>
                    <div className="inputs-dir">
                        <div className="collaborator">
                            <h3>Colaborador</h3>
                            <select name="collaborator" >
                                <option value="" disabled selected hidden>Selecionar colaborador...</option>
                                <option value="paquimetro">Gustavo</option>
                                <option value="micrometro">Maria</option>
                            </select>
                        </div>

                    </div>
                    <div className="Observation">
                        <h3>Observações/Ramal/Crachá</h3>
                        <input type="text" placeholder="Digite o ramal, crachá ou detalhes..." />
                    </div>
                </div>
                <button className="btn-register">Registrar Empréstimo</button>
            </div>
        </div>

    )
}

export default Register