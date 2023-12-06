import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { adicionarDestaque, removerDestaque, buscarDestaque } from "../services/services";

export const BotaoDestaque = ({album}) => {

    const [destaqueIdOuNull, setDestaqueIdOuNull] = useState(null);

    useEffect(() => {
        if(album && album.id)
            verificaDestaque()
    }, [album]);

    const verificaDestaque = () => {
        buscarDestaque(album.id).then(destaque => {
            console.log(destaque)
            setDestaqueIdOuNull(destaque ? destaque.id : null)
        })
    }

    const toggleDestaque = async () => {
        if(!destaqueIdOuNull) {
            await adicionarDestaque(album.id, album.descricao)
        } else {
            await removerDestaque(destaqueIdOuNull)
        }
        verificaDestaque()
    }

    return (
        <Button onClick={toggleDestaque} variant={destaqueIdOuNull ? 'outline-primary' : 'primary'}>
            { destaqueIdOuNull ? "Remover destaque" : "Adicionar destaque" }
        </Button>
    )
}

