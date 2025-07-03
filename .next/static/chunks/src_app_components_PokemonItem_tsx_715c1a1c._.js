(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_app_components_PokemonItem_tsx_715c1a1c._.js", {

"[project]/src/app/components/PokemonItem.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "PokemonItem": (()=>PokemonItem)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const PokemonItem = ({ id, name })=>{
    _s();
    const [pokemonData, setPokemonData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PokemonItem.useEffect": ()=>{
            const fetchData = {
                "PokemonItem.useEffect.fetchData": async ()=>{
                    try {
                        setLoading(true);
                        const [pokemonRes, speciesRes] = await Promise.all([
                            fetch(`https://pokeapi.co/api/v2/pokemon/${id}`),
                            fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
                        ]);
                        if (!pokemonRes.ok || !speciesRes.ok) {
                            throw new Error("Error al cargar los datos del Pokémon");
                        }
                        const [pokemonData, speciesData] = await Promise.all([
                            pokemonRes.json(),
                            speciesRes.json()
                        ]);
                        // Obtener descripción en español
                        const flavorEntry = speciesData.flavor_text_entries.find({
                            "PokemonItem.useEffect.fetchData.flavorEntry": (entry)=>entry.language.name === "es"
                        }["PokemonItem.useEffect.fetchData.flavorEntry"]);
                        // Obtener cadena evolutiva
                        const evoRes = await fetch(speciesData.evolution_chain.url);
                        const evoData = await evoRes.json();
                        const chainNames = [];
                        const traverse = {
                            "PokemonItem.useEffect.fetchData.traverse": (node)=>{
                                if (node) {
                                    chainNames.push(node.species.name);
                                    node.evolves_to.forEach(traverse);
                                }
                            }
                        }["PokemonItem.useEffect.fetchData.traverse"];
                        traverse(evoData.chain);
                        // Obtener relaciones de daño
                        const damageRelations = await getDamageRelations(pokemonData.types);
                        setPokemonData({
                            ...pokemonData,
                            speciesName: speciesData.name,
                            specieText: flavorEntry?.flavor_text || "Sin descripción",
                            evolutionChain: chainNames,
                            damageRelations
                        });
                    } catch (err) {
                        console.error("Error al obtener los datos:", err);
                        setError("Error al cargar los datos del Pokémon");
                    } finally{
                        setLoading(false);
                    }
                }
            }["PokemonItem.useEffect.fetchData"];
            fetchData();
        }
    }["PokemonItem.useEffect"], [
        id
    ]);
    const getDamageRelations = async (types)=>{
        const allDamageRelations = {
            double_damage_from: new Set(),
            double_damage_to: new Set(),
            half_damage_from: new Set(),
            half_damage_to: new Set(),
            no_damage_from: new Set(),
            no_damage_to: new Set()
        };
        for (const type of types){
            const typeData = await fetch(type.type.url).then((res)=>res.json());
            const relations = typeData.damage_relations;
            for(const key in relations){
                if (key in allDamageRelations) {
                    relations[key].forEach((rel)=>{
                        allDamageRelations[key].add(rel.name);
                    });
                }
            }
        }
        return {
            double_damage_from: Array.from(allDamageRelations.double_damage_from),
            double_damage_to: Array.from(allDamageRelations.double_damage_to),
            half_damage_from: Array.from(allDamageRelations.half_damage_from),
            half_damage_to: Array.from(allDamageRelations.half_damage_to),
            no_damage_from: Array.from(allDamageRelations.no_damage_from),
            no_damage_to: Array.from(allDamageRelations.no_damage_to)
        };
    };
    if (loading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PokemonSkeleton, {}, void 0, false, {
        fileName: "[project]/src/app/components/PokemonItem.tsx",
        lineNumber: 100,
        columnNumber: 25
    }, this);
    if (error) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "text-red-500",
        children: error
    }, void 0, false, {
        fileName: "[project]/src/app/components/PokemonItem.tsx",
        lineNumber: 101,
        columnNumber: 23
    }, this);
    if (!pokemonData) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full overflow-hidden flex justify-center items-center ring-8 ring-[#252436BF] bg-[#B8693E] shadow-lg",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-[url('https://i.imgur.com/DNVGE5B.png')] bg-repeat",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-5 mt-2 flex justify-between items-center shadow-md border-2 px-2 pt-1 rounded-[2px] border-opacity-50 border-t-teal-50 border-l-teal-50 border-b-[#000000] border-r-[#000000]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-Merriweather font-bold text-lg",
                            children: name
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/PokemonItem.tsx",
                            lineNumber: 109,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: "https://static.wikia.nocookie.net/yugioh/images/a/a1/EARTH.svg",
                            alt: name,
                            className: "mx-7 my-1",
                            height: "30",
                            width: "30"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/PokemonItem.tsx",
                            lineNumber: 110,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/PokemonItem.tsx",
                    lineNumber: 108,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto rounded-[1px] ring-4 my-1 h-[260px] w-[260px] shadow-lg shadow-black ring-offset-0 ring-[#808080]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
                        alt: name,
                        className: "w-full h-full object-cover",
                        loading: "lazy"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/PokemonItem.tsx",
                        lineNumber: 121,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/components/PokemonItem.tsx",
                    lineNumber: 120,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-2",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-[url('https://i.imgur.com/neIKEeX.png')] bg-repeat",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-slate-200 mx-1 my-2 px-1 ring-4 ring-[#FFC85F] font-Merriweather",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "font-bold capitalize",
                                    children: pokemonData.speciesName
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/PokemonItem.tsx",
                                    lineNumber: 133,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[20px]",
                                    children: pokemonData.specieText
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/PokemonItem.tsx",
                                    lineNumber: 134,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col items-end",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            "Índice de juego ",
                                            pokemonData.game_indices?.[0]?.game_index || "???"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/PokemonItem.tsx",
                                        lineNumber: 137,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/PokemonItem.tsx",
                                    lineNumber: 136,
                                    columnNumber: 29
                                }, this),
                                pokemonData.evolutionChain.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-2 text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-bold",
                                            children: "Cadena evolutiva:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/PokemonItem.tsx",
                                            lineNumber: 142,
                                            columnNumber: 37
                                        }, this),
                                        " ",
                                        pokemonData.evolutionChain.join(" → ")
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/PokemonItem.tsx",
                                    lineNumber: 141,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-3 text-sm space-y-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "🟥 Recibe doble daño de:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/PokemonItem.tsx",
                                                    lineNumber: 148,
                                                    columnNumber: 36
                                                }, this),
                                                " ",
                                                pokemonData.damageRelations.double_damage_from.join(", ") || "Ninguno"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/components/PokemonItem.tsx",
                                            lineNumber: 148,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "🟩 Hace doble daño a:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/PokemonItem.tsx",
                                                    lineNumber: 149,
                                                    columnNumber: 36
                                                }, this),
                                                " ",
                                                pokemonData.damageRelations.double_damage_to.join(", ") || "Ninguno"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/components/PokemonItem.tsx",
                                            lineNumber: 149,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "🟨 Recibe medio daño de:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/PokemonItem.tsx",
                                                    lineNumber: 150,
                                                    columnNumber: 36
                                                }, this),
                                                " ",
                                                pokemonData.damageRelations.half_damage_from.join(", ") || "Ninguno"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/components/PokemonItem.tsx",
                                            lineNumber: 150,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "🟦 Hace medio daño a:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/PokemonItem.tsx",
                                                    lineNumber: 151,
                                                    columnNumber: 36
                                                }, this),
                                                " ",
                                                pokemonData.damageRelations.half_damage_to.join(", ") || "Ninguno"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/components/PokemonItem.tsx",
                                            lineNumber: 151,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "⬛ No recibe daño de:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/PokemonItem.tsx",
                                                    lineNumber: 152,
                                                    columnNumber: 36
                                                }, this),
                                                " ",
                                                pokemonData.damageRelations.no_damage_from.join(", ") || "Ninguno"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/components/PokemonItem.tsx",
                                            lineNumber: 152,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "⬜ No hace daño a:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/PokemonItem.tsx",
                                                    lineNumber: 153,
                                                    columnNumber: 36
                                                }, this),
                                                " ",
                                                pokemonData.damageRelations.no_damage_to.join(", ") || "Ninguno"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/components/PokemonItem.tsx",
                                            lineNumber: 153,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/PokemonItem.tsx",
                                    lineNumber: 147,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/PokemonItem.tsx",
                            lineNumber: 132,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/PokemonItem.tsx",
                        lineNumber: 131,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/components/PokemonItem.tsx",
                    lineNumber: 130,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-2 flex justify-between items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[9px]",
                            children: "00000001"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/PokemonItem.tsx",
                            lineNumber: 161,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[9px]",
                            children: "©1996 KAZUKI TAKAHASHI"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/PokemonItem.tsx",
                            lineNumber: 162,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/PokemonItem.tsx",
                    lineNumber: 160,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/PokemonItem.tsx",
            lineNumber: 106,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/components/PokemonItem.tsx",
        lineNumber: 105,
        columnNumber: 9
    }, this);
};
_s(PokemonItem, "gvnJkc17FdWZgKHvWSWksuu36nE=");
_c = PokemonItem;
const PokemonSkeleton = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full overflow-hidden flex justify-center items-center ring-8 ring-[#252436BF] bg-[#B8693E] shadow-lg animate-pulse",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full h-[500px] bg-gray-300"
        }, void 0, false, {
            fileName: "[project]/src/app/components/PokemonItem.tsx",
            lineNumber: 171,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/components/PokemonItem.tsx",
        lineNumber: 170,
        columnNumber: 5
    }, this);
_c1 = PokemonSkeleton;
var _c, _c1;
__turbopack_context__.k.register(_c, "PokemonItem");
__turbopack_context__.k.register(_c1, "PokemonSkeleton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_app_components_PokemonItem_tsx_715c1a1c._.js.map