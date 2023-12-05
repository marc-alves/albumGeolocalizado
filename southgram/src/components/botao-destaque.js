import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { adicionarDestaque, removerDestaque, buscarDestaque } from "../services/services";

export const BotaoDestaque = ({album}) => {

    const [destaqueIdOuNull, setDestaqueIdOuNull] = useState(null);

    useEffect(() => {
        if(album && album.id)
            buscarDestaque(album.id).then(destaque => setDestaqueIdOuNull(destaque ? destaque.id : null))
    }, [album]);

    const toggleDestaque = async () => {
        if(destaqueIdOuNull) {
            adicionarDestaque(album.id, album.descricao)
        } else {
            removerDestaque(destaqueIdOuNull)
        }
    }

    return (
        <Button onClick={toggleDestaque} >
            { destaqueIdOuNull ? "Remover destaque" : "Adicionar destaque" }
        </Button>
    )
}

