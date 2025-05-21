import React, { useState } from "react";

const SettingTimer = ({ defaultTimes, onSave }) => {
    const [fokusTime, setFokusTime] = useState(defaultTimes.fokus);
    const [istirahatTime, setIstirahatTime] = useState(defaultTimes.istirahat);
    const [istirahatPanjangTime, setIstirahatPanjangTime] = useState(defaultTimes.istirahatPanjang);
    const [selectedPreset, setSelectedPreset] = useState(null);

    const presets = {
        panjang: { fokus: 60, istirahat: 10, istirahatPanjang: 15 },
        sedang: { fokus: 40, istirahat: 7, istirahatPanjang: 12 },
        pendek: { fokus: 25, istirahat: 5, istirahatPanjang: 10 },
    };

    const applyPreset = (presetName) => {
        const preset = presets[presetName];
        setFokusTime(preset.fokus);
        setIstirahatTime(preset.istirahat);
        setIstirahatPanjangTime(preset.istirahatPanjang);
        setSelectedPreset(presetName);
    };

    const handleSave = () => {
        onSave({
            fokus: parseInt(fokusTime),
            istirahat: parseInt(istirahatTime),
            istirahatPanjang: parseInt(istirahatPanjangTime),
        });
    };

    return (
        <div className="text-white w-full">
            <h2 className="text-2xl font-semibold mb-4">Atur Waktu</h2>

            {/* Preset Buttons */}
            <div className="flex justify-center gap-4 mb-6">
                <button
                    className={`px-4 py-2 rounded-lg border ${
                        selectedPreset === "panjang"
                            ? "bg-blue-600 text-white"
                            : "bg-transparent border-white text-white"
                    }`}
                    onClick={() => applyPreset("panjang")}
                >
                    Sesi Panjang
                </button>
                <button
                    className={`px-4 py-2 rounded-lg border ${
                        selectedPreset === "sedang"
                            ? "bg-blue-600 text-white"
                            : "bg-transparent border-white text-white"
                    }`}
                    onClick={() => applyPreset("sedang")}
                >
                    Sesi Sedang
                </button>
                <button
                    className={`px-4 py-2 rounded-lg border ${
                        selectedPreset === "pendek"
                            ? "bg-blue-600 text-white"
                            : "bg-transparent border-white text-white"
                    }`}
                    onClick={() => applyPreset("pendek")}
                >
                    Sesi Pendek
                </button>
            </div>

            {/* Manual Input */}
            <div className="space-y-4">
                <label className="block">
                    Fokus (menit)
                    <input
                        type="number"
                        value={fokusTime}
                        onChange={(e) => {
                            setFokusTime(e.target.value);
                            setSelectedPreset(null); // batal preset
                        }}
                        className="w-full mt-1 p-2 rounded-lg text-black"
                    />
                </label>
                <label className="block">
                    Istirahat (menit)
                    <input
                        type="number"
                        value={istirahatTime}
                        onChange={(e) => {
                            setIstirahatTime(e.target.value);
                            setSelectedPreset(null);
                        }}
                        className="w-full mt-1 p-2 rounded-lg text-black"
                    />
                </label>
                <label className="block">
                    Istirahat Panjang (menit)
                    <input
                        type="number"
                        value={istirahatPanjangTime}
                        onChange={(e) => {
                            setIstirahatPanjangTime(e.target.value);
                            setSelectedPreset(null);
                        }}
                        className="w-full mt-1 p-2 rounded-lg text-black"
                    />
                </label>
            </div>

            {/* Save Button */}
            <button
                onClick={handleSave}
                className="mt-6 w-full bg-blue-700 py-2 rounded-lg hover:bg-blue-800 transition"
            >
                Simpan
            </button>
        </div>
    );
};

export default SettingTimer;
