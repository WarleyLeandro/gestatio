import React from "react";
import iconPregnantPink900 from '../../../public/assets/icons/pregantPink900_128.png'

export default function LogoVertical() {
    return (
        <>
            <div className="rounded-t mb-0 py-2">
                <div className="btn-wrapper text-center">
                    <img
                        alt="pregant_woman"
                        className="mx-auto h-25"
                        src={iconPregnantPink900}
                    />
                    <div className="text-pink-900 text-center font-bold text-xl">
                        Meu Pré Natal
                    </div>
                </div>
            </div>
        </>
    )
}