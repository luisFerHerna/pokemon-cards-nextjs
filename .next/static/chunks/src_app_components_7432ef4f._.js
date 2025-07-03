(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_app_components_7432ef4f._.js", {

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
    const [versionName, setVersionName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("???");
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
                        if (pokemonData.game_indices && pokemonData.game_indices.length > 0) {
                            const firstIndex = pokemonData.game_indices[0];
                            setVersionName(firstIndex.version.name);
                        }
                        const flavorEntry = speciesData.flavor_text_entries.find({
                            "PokemonItem.useEffect.fetchData.flavorEntry": (entry)=>entry.language.name === "es"
                        }["PokemonItem.useEffect.fetchData.flavorEntry"]);
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
        lineNumber: 102,
        columnNumber: 25
    }, this);
    if (error) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "text-red-500",
        children: error
    }, void 0, false, {
        fileName: "[project]/src/app/components/PokemonItem.tsx",
        lineNumber: 103,
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
                            lineNumber: 111,
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
                            lineNumber: 112,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/PokemonItem.tsx",
                    lineNumber: 110,
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
                        lineNumber: 122,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/components/PokemonItem.tsx",
                    lineNumber: 121,
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
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                "Aparece en: Pokemon ",
                                                versionName
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/components/PokemonItem.tsx",
                                            lineNumber: 137,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                "Índice de juego ",
                                                pokemonData.game_indices?.[0]?.game_index || "???"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/components/PokemonItem.tsx",
                                            lineNumber: 138,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
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
                                            lineNumber: 143,
                                            columnNumber: 37
                                        }, this),
                                        " ",
                                        pokemonData.evolutionChain.join(" → ")
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/PokemonItem.tsx",
                                    lineNumber: 142,
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
                                                    lineNumber: 149,
                                                    columnNumber: 36
                                                }, this),
                                                " ",
                                                pokemonData.damageRelations.double_damage_from.join(", ") || "Ninguno"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/components/PokemonItem.tsx",
                                            lineNumber: 149,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "🟩 Hace doble daño a:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/PokemonItem.tsx",
                                                    lineNumber: 150,
                                                    columnNumber: 36
                                                }, this),
                                                " ",
                                                pokemonData.damageRelations.double_damage_to.join(", ") || "Ninguno"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/components/PokemonItem.tsx",
                                            lineNumber: 150,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "🟨 Recibe medio daño de:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/PokemonItem.tsx",
                                                    lineNumber: 151,
                                                    columnNumber: 36
                                                }, this),
                                                " ",
                                                pokemonData.damageRelations.half_damage_from.join(", ") || "Ninguno"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/components/PokemonItem.tsx",
                                            lineNumber: 151,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "🟦 Hace medio daño a:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/PokemonItem.tsx",
                                                    lineNumber: 152,
                                                    columnNumber: 36
                                                }, this),
                                                " ",
                                                pokemonData.damageRelations.half_damage_to.join(", ") || "Ninguno"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/components/PokemonItem.tsx",
                                            lineNumber: 152,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "⬛ No recibe daño de:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/PokemonItem.tsx",
                                                    lineNumber: 153,
                                                    columnNumber: 36
                                                }, this),
                                                " ",
                                                pokemonData.damageRelations.no_damage_from.join(", ") || "Ninguno"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/components/PokemonItem.tsx",
                                            lineNumber: 153,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "⬜ No hace daño a:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/PokemonItem.tsx",
                                                    lineNumber: 154,
                                                    columnNumber: 36
                                                }, this),
                                                " ",
                                                pokemonData.damageRelations.no_damage_to.join(", ") || "Ninguno"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/components/PokemonItem.tsx",
                                            lineNumber: 154,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/PokemonItem.tsx",
                                    lineNumber: 148,
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
            lineNumber: 108,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/components/PokemonItem.tsx",
        lineNumber: 107,
        columnNumber: 9
    }, this);
};
_s(PokemonItem, "9FR5tYpCeUmNMobQpInC1qYZUkk=");
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
"[project]/src/app/components/InfiniteScrollPokemonList.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "InfiniteScrollPokemonList": (()=>InfiniteScrollPokemonList)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$PokemonItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/PokemonItem.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const InfiniteScrollPokemonList = ()=>{
    _s();
    const [pokemons, setPokemons] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [page, setPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [hasMore, setHasMore] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const fetchPokemons = async ()=>{
        if (loading || !hasMore) return;
        setLoading(true);
        try {
            const response = await fetch(`/api/pokemon?limit=20&offset=${(page - 1) * 20}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            if (data.length === 0) {
                setHasMore(false);
            } else {
                setPokemons((prev)=>[
                        ...prev,
                        ...data
                    ]);
                setPage((prev)=>prev + 1);
            }
        } catch (error) {
            console.error("Error fetching pokemons:", error);
        } finally{
            setLoading(false);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "InfiniteScrollPokemonList.useEffect": ()=>{
            const handleScroll = {
                "InfiniteScrollPokemonList.useEffect.handleScroll": ()=>{
                    if (window.innerHeight + document.documentElement.scrollTop + 500 >= document.documentElement.offsetHeight && !loading) {
                        fetchPokemons();
                    }
                }
            }["InfiniteScrollPokemonList.useEffect.handleScroll"];
            window.addEventListener('scroll', handleScroll);
            return ({
                "InfiniteScrollPokemonList.useEffect": ()=>window.removeEventListener('scroll', handleScroll)
            })["InfiniteScrollPokemonList.useEffect"];
        }
    }["InfiniteScrollPokemonList.useEffect"], [
        page,
        loading,
        hasMore
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "InfiniteScrollPokemonList.useEffect": ()=>{
            fetchPokemons();
        }
    }["InfiniteScrollPokemonList.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full py-10 px-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6",
                children: pokemons.map((pokemon)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$PokemonItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PokemonItem"], {
                        ...pokemon
                    }, `${pokemon.id}-${pokemon.name}`, false, {
                        fileName: "[project]/src/app/components/InfiniteScrollPokemonList.tsx",
                        lineNumber: 56,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/components/InfiniteScrollPokemonList.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this),
            loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "col-span-full flex justify-center py-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/InfiniteScrollPokemonList.tsx",
                    lineNumber: 61,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/InfiniteScrollPokemonList.tsx",
                lineNumber: 60,
                columnNumber: 9
            }, this),
            !hasMore && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "col-span-full text-center py-8 text-gray-500",
                children: "No hay más Pokémon para mostrar"
            }, void 0, false, {
                fileName: "[project]/src/app/components/InfiniteScrollPokemonList.tsx",
                lineNumber: 65,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/InfiniteScrollPokemonList.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
};
_s(InfiniteScrollPokemonList, "14RciJGCa4XQQuXzSTEyA88IGzI=");
_c = InfiniteScrollPokemonList;
var _c;
__turbopack_context__.k.register(_c, "InfiniteScrollPokemonList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_app_components_7432ef4f._.js.map