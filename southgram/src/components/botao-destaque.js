import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { adicionarDestaque, removerDestaque, verificarDestaque } from "../services/services";

export const BotaoDestaque = ({album}) => {

    const [ativado, setAtivado] = useState(false);

    useEffect(() => {
        if(album && album.id)
            verificarDestaque(album.id).then(setAtivado)
    }, [album]);

    const toggleDestaque = async () => {
        if(ativado) {
            adicionarDestaque(album.id, album.descricao)
        } else {
            removerDestaque(album.id)
        }
    }

    return (
        <Button onClick={toggleDestaque} >
            { ativado ? "Remover destaque" : "Adicionar destaque" }
        </Button>
    )
}

