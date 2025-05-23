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
            <h2 className="text-2xl font-bold mb-20">Atur Waktu</h2>

            {/* Preset Buttons */}
            <div className="flex justify-center gap-3 mb-6 ">
                {["panjang", "sedang", "pendek"].map((preset) => (
                    <button
                        key={preset}
                        className={`px-4 py-2 rounded-lg border font-medium transition duration-200
                            ${selectedPreset === preset
                                ? "bg-blue-900 text-white border-black-600"
                                : "bg-white/10 border-white hover:bg-white/20"
                            }`}
                        onClick={() => applyPreset(preset)}
                    >
                        Sesi {preset.charAt(0).toUpperCase() + preset.slice(1)}
                    </button>
                ))}
            </div>

            {/* Manual Input */}
            <div className="space-y-4 text-sm">
                <label className="block">
                    <span className="block mb-1 font-medium">Fokus (menit)</span>
                    <input
                        type="number"
                        value={fokusTime}
                        onChange={(e) => {
                            setFokusTime(e.target.value);
                            setSelectedPreset(null);
                        }}
                        className="w-full p-3 rounded-lg bg-white text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </label>
                <label className="block">
                    <span className="block mb-1 font-medium">Istirahat (menit)</span>
                    <input
                        type="number"
                        value={istirahatTime}
                        onChange={(e) => {
                            setIstirahatTime(e.target.value);
                            setSelectedPreset(null);
                        }}
                        className="w-full p-3 rounded-lg bg-white text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </label>
            </div>

            {/* Save Button */}
            <button
                onClick={handleSave}
                className="mt-6 w-full bg-blue-700 py-3 rounded-lg text-white font-semibold hover:bg-blue-800 transition"
            >
                Simpan
            </button>
        </div>
    );
};

export default SettingTimer;
