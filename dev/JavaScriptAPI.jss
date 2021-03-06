var __mod__ = null;
var __name__ = "JS API";
var __dir__ = "/storage/sdcard0/games/com.mojang/mods/JS API/";
var __config__ = null;
function __debug_typecheck__() {}
function runCustomSource() {}
var BlockID = {};
var ItemID = {};
function importLib() {}
function IMPORT() {}
function getCoreAPILevel() {}
function runOnMainThread(func) {}
function getMCPEVersion() {}
var Debug = {};
Debug.sysTime = function() {};
Debug.addParticle = function(x, y, z, id, vx, vy, vz, data) {};
Debug.message = function(message) {};
Debug.warning = function(message) {};
Debug.error = function(message) {};
Debug.m = function() {};
Debug.bitmap = function(bitmap, title) {};
var FileTools = {};
FileTools.mntdir = "/mnt";
FileTools.root = "/storage/sdcard0/";
FileTools.workdir = "games/com.mojang/coreengine/";
FileTools.moddir = "games/com.mojang/mods/";
FileTools.modpedir = "games/com.mojang/modpe/";
FileTools.mkdir = function(dir) {};
FileTools.mkworkdirs = function() {};
FileTools.getFullPath = function(path) {};
FileTools.isExists = function(path) {};
FileTools.WriteText = function(file, text, add) {};
FileTools.ReadText = function(file) {};
FileTools.WriteImage = function(file, bitmap) {};
FileTools.ReadImage = function(file) {};
FileTools.ReadTextAsset = function(name) {};
FileTools.ReadImageAsset = function(name) {};
FileTools.ReadBytesAsset = function(name) {};
FileTools.GetListOfDirs = function(path) {};
FileTools.GetListOfFiles = function(path, ext) {};
FileTools.ReadKeyValueFile = function(dir, specialSeparator) {};
FileTools.WriteKeyValueFile = function(dir, data, specialSeparator) {};
FileTools.ReadJSON = function(dir) {};
FileTools.WriteJSON = function(dir, obj, beautify) {};
var Logger = {};
var Translation = {};
var Threading = {};
Threading.threads = {};
Threading.formatFatalErrorMessage = function(error, name, priority, formatFunc) {};
Threading.initThread = function(name, func, priority, isErrorFatal, formatFunc) {};
Threading.getThread = function(name) {};
function Config() {}
var UI = {};
var UpdatableAPI = {};
var Updatable = {};
var TileEntity = {};
TileEntity.tileEntityPrototypes = {};
TileEntity.tileEntityList = {};
TileEntity.resetEngine = function() {};
TileEntity.registerPrototype = function(blockID, customPrototype) {};
TileEntity.getPrototype = function(blockID) {};
TileEntity.isTileEntityBlock = function(blockID) {};
TileEntity.createTileEntityForPrototype = function(Prototype, addToUpdate) {};
TileEntity.addTileEntity = function(x, y, z) {};
TileEntity.addUpdatableAsTileEntity = function(updatable) {};
TileEntity.getTileEntity = function(x, y, z) {};
TileEntity.destroyTileEntity = function(tileEntity) {};
TileEntity.destroyTileEntityAtCoords = function(x, y, z) {};
TileEntity.isTileEntityLoaded = function(tileEntity) {};
TileEntity.checkTileEntityForIndex = function(index) {};
TileEntity.CheckTileEntities = function() {};
TileEntity.DeployDestroyChecker = function(tileEntity) {};
var MobRegistry = {};
MobRegistry.customEntities = {};
MobRegistry.loadedEntities = {};
MobRegistry.registerEntity = function(name) {};
MobRegistry.registerUpdatableAsEntity = function(updatable) {};
MobRegistry.spawnEntityAsPrototype = function(typeName, coords, extraData) {};
MobRegistry.getEntityUpdatable = function(entity) {};
MobRegistry.registerNativeEntity = function(entity) {};
MobRegistry.registerEntityRemove = function(entity) {};
MobRegistry.resetEngine = function() {};
var MobSpawnRegistry = {};
MobSpawnRegistry.spawnData = {};
MobSpawnRegistry.registerSpawn = function(entityType, rarity, condition, denyNaturalDespawn) {};
MobSpawnRegistry.getRandomSpawn = function(rarityMultiplier) {};
MobSpawnRegistry.getRandPosition = function() {};
MobSpawnRegistry.executeSpawn = function(spawn, position) {};
MobSpawnRegistry.counter = 0;
MobSpawnRegistry.tick = function() {};
MobSpawnRegistry.onChunkGenerated = function(x, z) {};
var Callback = {};
function GameObject(name, Prototype) {}
var GameObjectRegistry = {};
GameObjectRegistry.gameObjectTypes = {};
GameObjectRegistry.activeGameObjects = {};
GameObjectRegistry.genUniqueName = function(name) {};
GameObjectRegistry.registerClass = function(gameObjectClass) {};
GameObjectRegistry.deployGameObject = function(gameobject) {};
GameObjectRegistry.addGameObject = function(gameobject) {};
GameObjectRegistry.removeGameObject = function(gameobject) {};
GameObjectRegistry.resetEngine = function() {};
GameObjectRegistry.getAllByType = function(type, clone) {};
GameObjectRegistry.callForType = function() {};
GameObjectRegistry.callForTypeSafe = function() {};
var ModAPI = {};
ModAPI.modAPIs = {};
ModAPI.registerAPI = function(name, api, descr) {};
ModAPI.requireAPI = function(name) {};
ModAPI.requireGlobal = function(name) {};
ModAPI.requireAPIdoc = function(name) {};
ModAPI.requireAPIPropertyDoc = function(name, prop) {};
ModAPI.getModByName = function(modName) {};
ModAPI.isModLoaded = function(modName) {};
ModAPI.addAPICallback = function(apiName, func) {};
ModAPI.addModCallback = function(modName, func) {};
ModAPI.getModList = function() {};
ModAPI.getModPEList = function() {};
ModAPI.addTexturePack = function(path) {};
ModAPI.cloneAPI = function(api, deep) {};
ModAPI.inheritPrototypes = function(source, target) {};
ModAPI.cloneObject = function(source, deep, rec) {};
ModAPI.debugCloneObject = function(source, deep, rec) {};
var Saver = {};
Saver.addSavesScope = function(name, loadFunc, saveFunc) {};
Saver.registerScopeSaver = function(name, saver) {};
Saver.registerObjectSaver = function(name, saver) {};
Saver.registerObject = function(obj, saverId) {};
Saver.setObjectIgnored = function(obj, ignore) {};
var World = {};
World.isLoaded = false;
World.setLoaded = function(isLoaded) {};
World.isWorldLoaded = function() {};
World.getThreadTime = function() {};
World.nativeSetBlock = function() {};
World.nativeGetBlockID = function() {};
World.nativeGetBlockData = function(x, y, z) {};
World.setBlock = function(x, y, z, id, data) {};
World.setFullBlock = function(x, y, z, fullTile) {};
World.getBlock = function(x, y, z) {};
World.getBlockID = function(x, y, z) {};
World.getBlockData = function(x, y, z) {};
World.destroyBlock = function(x, y, z, drop) {};
World.getLightLevel = function(x, y, z) {};
World.isChunkLoaded = function(x, z) {};
World.isChunkLoadedAt = function(x, y, z) {};
World.getTileEntity = function(x, y, z) {};
World.addTileEntity = function(x, y, z) {};
World.removeTileEntity = function(x, y, z) {};
World.getContainer = function(x, y, z) {};
World.getWorldTime = function() {};
World.setWorldTime = function(time) {};
World.setDayMode = function(day) {};
World.setNightMode = function(night) {};
World.getWeather = function() {};
World.setWeather = function(weather) {};
World.drop = function(x, y, z, id, count, data) {};
World.explode = function(x, y, z, power, someBoolean) {};
World.getBiome = function(x, z) {};
World.getBiomeName = function(x, z) {};
World.getGrassColor = function(x, z) {};
World.setGrassColor = function(x, z, color) {};
World.getGrassColorRGB = function(x, z) {};
World.setGrassColorRGB = function(x, z, rgb) {};
World.canSeeSky = function(x, y, z) {};
World.playSound = function(x, y, z, name, volume, pitch) {};
World.playSoundAtEntity = function(entity, name, volume, pitch) {};
var Entity = {};
Entity.getAll = function() {};
Entity.getAllJS = function() {};
Entity.EXTRA_DATA_PREFIX = "core.engine.";
Entity.getExtra = function(ent, name) {};
Entity.putExtra = function(ent, name, extra) {};
Entity.getExtraJson = function(ent, name) {};
Entity.putExtraJson = function(ent, name, obj) {};
Entity.addEffect = function(ent, effectId, effectTime, effectData, amplifier, particles) {};
Entity.clearEffect = function(ent, id) {};
Entity.clearEffects = function(ent) {};
Entity.damageEntity = function(ent, damage, cause, params) {};
Entity.healEntity = function(ent, heal) {};
Entity.getType = function(ent) {};
Entity.setHitbox = function(ent, w, h) {};
Entity.isExist = function(entity) {};
Entity.spawn = function(x, y, z, type, skin) {};
Entity.spawnCustom = function(name, x, y, z, extra) {};
Entity.spawnCustomAtCoords = function(name, coords, extra) {};
Entity.spawnAtCoords = function(coords, type, skin) {};
Entity.remove = function(entity) {};
Entity.getCustom = function(entity) {};
Entity.getAge = function(ent) {};
Entity.setAge = function(ent, age) {};
Entity.getSkin = function(ent) {};
Entity.setSkin = function(ent, skin) {};
Entity.setTexture = function(ent, texture) {};
Entity.getRender = function(ent) {};
Entity.setRender = function(ent, render) {};
Entity.rideAnimal = function(ent1, ent2) {};
Entity.getNameTag = function(ent) {};
Entity.setNameTag = function(ent, tag) {};
Entity.getTarget = function(ent) {};
Entity.setTarget = function(ent, target) {};
Entity.getMobile = function(ent, mobile) {};
Entity.setMobile = function(ent, mobile) {};
Entity.getSneaking = function(ent) {};
Entity.setSneaking = function(ent, sneak) {};
Entity.getRider = function(ent) {};
Entity.getRiding = function(ent) {};
Entity.setFire = function(ent, fire, force) {};
Entity.health = function(entity) {};
Entity.getHealth = function(ent) {};
Entity.setHealth = function(ent, health) {};
Entity.getMaxHealth = function(ent) {};
Entity.setMaxHealth = function(ent, health) {};
Entity.setPosition = function(ent, x, y, z) {};
Entity.getPosition = function(ent) {};
Entity.addPosition = function(ent, x, y, z) {};
Entity.setVelocity = function(ent, x, y, z) {};
Entity.getVelocity = function(ent) {};
Entity.addVelocity = function(ent, x, y, z) {};
Entity.getDistanceBetweenCoords = function(coords1, coords2) {};
Entity.getDistanceToCoords = function(ent, coords) {};
Entity.getDistanceToEntity = function(ent1, ent2) {};
Entity.getXZPlayerDis = function(entity) {};
Entity.getLookAngle = function(ent) {};
Entity.setLookAngle = function(ent, yaw, pitch) {};
Entity.getLookVectorByAngle = function(angle) {};
Entity.getLookVector = function(ent) {};
Entity.getLookAt = function(ent, x, y, z) {};
Entity.lookAt = function(ent, x, y, z) {};
Entity.lookAtCoords = function(ent, coords) {};
Entity.moveToTarget = function(ent, target, params) {};
Entity.moveToAngle = function(ent, angle, params) {};
Entity.moveToLook = function(ent, params) {};
Entity.getMovingVector = function(ent) {};
Entity.getMovingAngle = function(ent) {};
Entity.getMovingAngleByPositions = function(pos1, pos2) {};
Entity.findNearest = function(coords, type, maxRange) {};
Entity.getAllInRange = function(coords, maxRange, type) {};
Entity.getInventory = function(ent, handleNames, handleEnchant) {};
Entity.getArmorSlot = function(ent, slot) {};
Entity.setArmorSlot = function(ent, slot, id, count, data) {};
Entity.getCarriedItem = function(ent, handleEnchant, handleNames) {};
Entity.setCarriedItem = function(ent, id, count, data, enchant, name) {};
Entity.getDroppedItem = function(ent) {};
Entity.setDroppedItem = function(ent, id, count, data) {};
Entity.getProjectileItem = function(projectile) {};
var Player = {};
Player.get = function() {};
Player.getNameForEnt = function(ent) {};
Player.getName = function() {};
Player.getDimension = function() {};
Player.isPlayer = function(ent) {};
Player.getPointed = function() {};
Player.getInventory = function(loadPart, handleEnchant, handleNames) {};
Player.addItemToInventory = function(id, count, data) {};
Player.getCarriedItem = function(handleEnchant, handleNames) {};
Player.setCarriedItem = function(id, count, data, enchant, name) {};
Player.decreaseCarriedItem = function(count) {};
Player.getInventorySlot = function(slot) {};
Player.setInventorySlot = function(slot, id, count, data) {};
Player.getArmorSlot = function(slot) {};
Player.setArmorSlot = function(slot, id, count, data) {};
Player.getSelectedSlotId = function() {};
Player.setSelectedSlotId = function(slot) {};
Player.setPosition = function(x, y, z) {};
Player.getPosition = function() {};
Player.addPosition = function(x, y, z) {};
Player.setVelocity = function(x, y, z) {};
Player.getVelocity = function() {};
Player.addVelocity = function(x, y, z) {};
Player.experience = function() {};
Player.getExperience = function() {};
Player.setExperience = function(exp) {};
Player.addExperience = function(exp) {};
Player.level = function() {};
Player.getLevel = function() {};
Player.setLevel = function(level) {};
Player.addLevel = function(level) {};
Player.flying = function() {};
Player.getFlyingEnabled = function() {};
Player.setFlyingEnabled = function(enabled) {};
Player.getFlying = function() {};
Player.setFlying = function(enabled) {};
Player.exhaustion = function() {};
Player.getExhaustion = function() {};
Player.setExhaustion = function(value) {};
Player.hunger = function() {};
Player.getHunger = function() {};
Player.setHunger = function(value) {};
Player.saturation = function() {};
Player.getSaturation = function() {};
Player.setSaturation = function(value) {};
Player.health = function() {};
Player.getHealth = function() {};
Player.setHealth = function(value) {};
Player.score = function() {};
Player.getScore = function() {};
Player.setFov = function(fov) {};
Player.resetFov = function() {};
Player.setCameraEntity = function(ent) {};
Player.resetCameraEntity = function() {};
var Game = {};
Game.prevent = function() {};
Game.message = function(msg) {};
Game.tipMessage = function(msg) {};
Game.dialogMessage = function(message, title) {};
Game.setDifficulty = function(difficulty) {};
Game.getDifficulty = function() {};
Game.getMinecraftVersion = function() {};
Game.getEngineVersion = function() {};
function Render(params) {}
function Texture(path) {}
function EntityModel(parentModel) {}
function EntityModelWatcher(entity, model) {}
function EntityAIClass(customPrototype) {}
function EntityAIWatcher(customPrototype) {}
var EntityAI = {};
EntityAI.Idle = {};
EntityAI.Follow = {};
EntityAI.Panic = {};
EntityAI.Wander = {};
EntityAI.Attack = {};
EntityAI.Swim = {};
EntityAI.PanicWatcher = {};
var GenerationUtils = {};
GenerationUtils.isTerrainBlock = function(id) {};
GenerationUtils.isTransparentBlock = function(id) {};
GenerationUtils.canSeeSky = function(x, y, z) {};
GenerationUtils.randomXZ = function(cx, cz) {};
GenerationUtils.randomCoords = function(cx, cz, lowest, highest) {};
GenerationUtils.findSurface = function(x, y, z) {};
GenerationUtils.findHighSurface = function(x, z) {};
GenerationUtils.findLowSurface = function(x, z) {};
GenerationUtils.__lockedReal = {};
GenerationUtils.__lockedReal.id = 0;
GenerationUtils.__lockedReal.data = 0;
GenerationUtils.lockInBlock = function(id, data, checkerTile, checkerMode) {};
GenerationUtils.setLockedBlock = function(x, y, z) {};
GenerationUtils.genMinable = function(x, y, z, params) {};
GenerationUtils.generateOre = function(x, y, z, id, data, amount, noStoneCheck) {};
var Animation = {};
Animation.base = function(x, y, z) {};
Animation.Base = function(x, y, z) {};
Animation.item = function(x, y, z) {};
Animation.Item = function(x, y, z) {};
var Particles = {};
var IDRegistry = {};
var IDData = {};
IDData.item = {};
IDData.block = {};
var Block = {};
Block.idSource = {};
Block.dropFunctions = {};
Block.getNumericId = function(id) {};
Block.createBlock = function(namedID, defineData, blockType) {};
Block.createBlockWithRotation = function(namedID, defineData, blockType) {};
Block.isNativeTile = function(id) {};
Block.registerDropFunctionForID = function(numericID, dropFunc, level) {};
Block.registerDropFunction = function(namedID, dropFunc, level) {};
Block.defaultDropFunction = function(blockCoords, blockID, blockData, diggingLevel) {};
Block.getDropFunction = function(id) {};
Block.setDestroyLevelForID = function(id, level) {};
Block.setDestroyLevel = function(namedID, level) {};
Block.setDestroyTime = function(namedID, time) {};
Block.getDestroyTime = function(numericID) {};
Block.setTempDestroyTime = function(numericID, time) {};
Block.setBlockMaterial = function(namedID, material, level) {};
Block.setRedstoneTile = function(namedID, data, isRedstone) {};
Block.onBlockDestroyed = function(coords, fullTile) {};
Block.getBlockDropViaItem = function(block, item, coords) {};
Block.placeFuncs = {};
Block.registerPlaceFunctionForID = function(block, func) {};
Block.registerPlaceFunction = function(namedID, func) {};
Block.getPlaceFunc = function(block) {};
Block.setBlockShape = function(id, pos1, pos2, data) {};
Block.setShape = function(id, x1, y1, z1, x2, y2, z2, data) {};
Block.createSpecialType = function(description, nameKey) {};
Block.TYPE_BASE = "createBlock";
Block.TYPE_ROTATION = "createBlockWithRotation";
Block.setPrototype = function(namedID, Prototype) {};
Block.setRandomTickCallback = function(id, callback) {};
Block.setAnimateTickCallback = function(id, callback) {};
var BlockRenderer = {};
var ICRender = {};
var Item = {};
Item.idSource = {};
Item.useFunctions = {};
Item.throwableFunctions = {};
Item.getNumericId = function(id) {};
Item.getItemById = function(id) {};
Item.createItem = function(namedID, name, texture, params) {};
Item.createFoodItem = function(namedID, name, texture, params) {};
Item.createFuelItem = function(namedID, name, texture, params) {};
Item.createArmorItem = function(namedID, name, texture, params) {};
Item.createThrowableItem = function(namedID, name, texture, params) {};
Item.isNativeItem = function(id) {};
Item.getMaxDamage = function(id) {};
Item.getMaxStack = function(id) {};
Item.getName = function(id, data, encode) {};
Item.isValid = function(id, data) {};
Item.addToCreative = function(id, count, data) {};
Item.describeItem = function(numericID, description) {};
Item.setCategory = function(id, category) {};
Item.setEnchantType = function(id, enchant, value) {};
Item.setToolRender = function(id, enabled) {};
Item.setMaxDamage = function(id, maxdamage) {};
Item.setGlint = function(id, enabled) {};
Item.setLiquidClip = function(id, enabled) {};
Item.setStackedByData = function(id, enabled) {};
Item.setProperties = function(id, props) {};
Item.setUseAnimation = function(id, animType) {};
Item.registerUseFunctionForID = function(numericID, useFunc) {};
Item.registerUseFunction = function(namedID, useFunc) {};
Item.onItemUsed = function(coords, item, block) {};
Item.registerThrowableFunctionForID = function(numericID, useFunc) {};
Item.registerThrowableFunction = function(namedID, useFunc) {};
Item.onProjectileHit = function(projectile, item, target) {};
Item.iconOverrideFunctions = {};
Item.registerIconOverrideFunction = function(namedID, func) {};
Item.onIconOverride = function(item) {};
Item.nameOverrideFunctions = {};
Item.registerNameOverrideFunction = function(namedID, func) {};
Item.onNameOverride = function(item, name) {};
Item.noTargetUseFunctions = {};
Item.registerNoTargetUseFunction = function(namedID, func) {};
Item.onUseNoTarget = function(item) {};
Item.usingReleasedFunctions = {};
Item.registerUsingReleasedFunction = function(namedID, func) {};
Item.onUsingReleased = function(item, ticks) {};
Item.usingCompleteFunctions = {};
Item.registerUsingCompleteFunction = function(namedID, func) {};
Item.onUsingComplete = function(item) {};
Item.dispenseFunctions = {};
Item.registerDispenseFunction = function(namedID, func) {};
Item.onDispense = function(coords, item) {};
Item.TYPE_BASE = "createItem";
Item.TYPE_FOOD = "createFoodItem";
Item.TYPE_ARMOR = "createArmorItem";
Item.TYPE_THROWABLE = "createThrowableItem";
Item.setPrototype = function(namedID, Prototype) {};
var Recipes = {};
var ToolAPI = {};
ToolAPI.blockMaterials = {};
ToolAPI.toolMaterials = {};
ToolAPI.toolData = {};
ToolAPI.blockData = {};
ToolAPI.needDamagableItemFix = false;
ToolAPI.addBlockMaterial = function(name, breakingMultiplier) {};
ToolAPI.addToolMaterial = function(name, material) {};
ToolAPI.registerTool = function(id, toolMaterial, blockMaterials, params) {};
ToolAPI.registerSword = function(id, toolMaterial, params) {};
ToolAPI.registerBlockMaterial = function(uid, materialName, level, isNative) {};
ToolAPI.registerBlockDiggingLevel = function(uid, level) {};
ToolAPI.registerBlockMaterialAsArray = function(materialName, UIDs, isNative) {};
ToolAPI.refresh = function() {};
ToolAPI.getBlockData = function(blockID) {};
ToolAPI.getBlockMaterial = function(blockID) {};
ToolAPI.getBlockDestroyLevel = function(blockID) {};
ToolAPI.getEnchantExtraData = function(enchant) {};
ToolAPI.fortuneDropModifier = function(drop, level) {};
ToolAPI.getDestroyTimeViaTool = function(fullBlock, toolItem, coords, ignoreNative) {};
ToolAPI.getToolData = function(itemID) {};
ToolAPI.getToolLevel = function(itemID) {};
ToolAPI.getToolLevelViaBlock = function(itemID, blockID) {};
ToolAPI.getCarriedToolData = function() {};
ToolAPI.getCarriedToolLevel = function() {};
ToolAPI.startDestroyHook = function(coords, block, carried) {};
ToolAPI.destroyBlockHook = function(coords, block, carried) {};
ToolAPI.LastAttackTime = 0;
ToolAPI.playerAttackHook = function(attackerPlayer, victimEntity, carried) {};
ToolAPI.resetEngine = function() {};
ToolAPI.dropExpOrbs = function(x, y, z, value) {};
ToolAPI.dropOreExp = function(coords, minVal, maxVal, modifier) {};
var Armor = {};
Armor.registerFuncs = function(id, funcs) {};
Armor.preventDamaging = function(id) {};
var LiquidRegistry = {};
LiquidRegistry.liquidStorageSaverId = 1306847136;
LiquidRegistry.liquids = {};
LiquidRegistry.registerLiquid = function(key, name, uiTextures, modelTextures) {};
LiquidRegistry.getLiquidData = function(key) {};
LiquidRegistry.isExists = function(key) {};
LiquidRegistry.getLiquidName = function(key) {};
LiquidRegistry.getLiquidUITexture = function(key, width, height) {};
LiquidRegistry.getLiquidUIBitmap = function(key, width, height) {};
LiquidRegistry.FullByEmpty = {};
LiquidRegistry.EmptyByFull = {};
LiquidRegistry.registerItem = function(liquid, empty, full) {};
LiquidRegistry.getEmptyItem = function(id, data) {};
LiquidRegistry.getItemLiquid = function(id, data) {};
LiquidRegistry.getFullItem = function(id, data, liquid) {};
LiquidRegistry.Storage = function(tileEntity) {};
var Native = {};
Native.ArmorType = {};
Native.ArmorType.boots = 3;
Native.ArmorType.chestplate = 1;
Native.ArmorType.helmet = 0;
Native.ArmorType.leggings = 2;
Native.ItemCategory = {};
Native.ItemCategory.DECORATION = 2;
Native.ItemCategory.FOOD = 4;
Native.ItemCategory.INTERNAL = 0;
Native.ItemCategory.MATERIAL = 1;
Native.ItemCategory.TOOL = 3;
Native.ParticleType = {};
Native.ParticleType.angryVillager = 32;
Native.ParticleType.bubble = 1;
Native.ParticleType.cloud = 4;
Native.ParticleType.crit = 2;
Native.ParticleType.dripLava = 24;
Native.ParticleType.dripWater = 23;
Native.ParticleType.enchantmenttable = 32;
Native.ParticleType.fallingDust = 26;
Native.ParticleType.flame = 7;
Native.ParticleType.happyVillager = 33;
Native.ParticleType.heart = 17;
Native.ParticleType.hugeexplosion = 14;
Native.ParticleType.hugeexplosionSeed = 15;
Native.ParticleType.ink = 25;
Native.ParticleType.itemBreak = 12;
Native.ParticleType.largeexplode = 5;
Native.ParticleType.lava = 8;
Native.ParticleType.mobFlame = 16;
Native.ParticleType.note = 36;
Native.ParticleType.portal = 20;
Native.ParticleType.rainSplash = 21;
Native.ParticleType.redstone = 10;
Native.ParticleType.slime = 30;
Native.ParticleType.smoke = 4;
Native.ParticleType.smoke2 = 9;
Native.ParticleType.snowballpoof = 13;
Native.ParticleType.spell = 29;
Native.ParticleType.spell2 = 28;
Native.ParticleType.spell3 = 27;
Native.ParticleType.splash = 22;
Native.ParticleType.suspendedTown = 19;
Native.ParticleType.terrain = 16;
Native.ParticleType.waterWake = 31;
Native.Color = {};
Native.Color.AQUA = "§b";
Native.Color.BEGIN = "§";
Native.Color.BLACK = "§0";
Native.Color.BLUE = "§9";
Native.Color.BOLD = "§l";
Native.Color.DARK_AQUA = "§3";
Native.Color.DARK_BLUE = "§1";
Native.Color.DARK_GRAY = "§8";
Native.Color.DARK_GREEN = "§2";
Native.Color.DARK_PURPLE = "§5";
Native.Color.DARK_RED = "§4";
Native.Color.GOLD = "§6";
Native.Color.GRAY = "§7";
Native.Color.GREEN = "§a";
Native.Color.LIGHT_PURPLE = "§d";
Native.Color.RED = "§c";
Native.Color.RESET = "§r";
Native.Color.WHITE = "§f";
Native.Color.YELLOW = "§e";
Native.EntityType = {};
Native.EntityType.ARROW = 80;
Native.EntityType.BAT = 19;
Native.EntityType.BLAZE = 43;
Native.EntityType.BOAT = 90;
Native.EntityType.CAVE_SPIDER = 40;
Native.EntityType.CHICKEN = 10;
Native.EntityType.COW = 11;
Native.EntityType.CREEPER = 33;
Native.EntityType.EGG = 82;
Native.EntityType.ENDERMAN = 38;
Native.EntityType.EXPERIENCE_ORB = 69;
Native.EntityType.EXPERIENCE_POTION = 68;
Native.EntityType.FALLING_BLOCK = 66;
Native.EntityType.FIREBALL = 85;
Native.EntityType.FISHING_HOOK = 77;
Native.EntityType.GHAST = 41;
Native.EntityType.IRON_GOLEM = 20;
Native.EntityType.ITEM = 64;
Native.EntityType.LAVA_SLIME = 42;
Native.EntityType.LIGHTNING_BOLT = 93;
Native.EntityType.MINECART = 84;
Native.EntityType.MUSHROOM_COW = 16;
Native.EntityType.OCELOT = 22;
Native.EntityType.PAINTING = 83;
Native.EntityType.PIG = 12;
Native.EntityType.PIG_ZOMBIE = 36;
Native.EntityType.PLAYER = 63;
Native.EntityType.POLAR_BEAR = 28;
Native.EntityType.PRIMED_TNT = 65;
Native.EntityType.RABBIT = 18;
Native.EntityType.SHEEP = 13;
Native.EntityType.SILVERFISH = 39;
Native.EntityType.SKELETON = 34;
Native.EntityType.SLIME = 37;
Native.EntityType.SMALL_FIREBALL = 94;
Native.EntityType.SNOWBALL = 81;
Native.EntityType.SNOW_GOLEM = 21;
Native.EntityType.SPIDER = 35;
Native.EntityType.SQUID = 17;
Native.EntityType.THROWN_POTION = 86;
Native.EntityType.VILLAGER = 15;
Native.EntityType.WOLF = 14;
Native.EntityType.ZOMBIE = 32;
Native.EntityType.ZOMBIE_VILLAGER = 44;
Native.MobRenderType = {};
Native.MobRenderType.arrow = 25;
Native.MobRenderType.bat = 10;
Native.MobRenderType.blaze = 18;
Native.MobRenderType.boat = 35;
Native.MobRenderType.camera = 48;
Native.MobRenderType.chicken = 5;
Native.MobRenderType.cow = 6;
Native.MobRenderType.creeper = 22;
Native.MobRenderType.egg = 28;
Native.MobRenderType.enderman = 24;
Native.MobRenderType.expPotion = 45;
Native.MobRenderType.experienceOrb = 40;
Native.MobRenderType.fallingTile = 33;
Native.MobRenderType.fireball = 37;
Native.MobRenderType.fishHook = 26;
Native.MobRenderType.ghast = 17;
Native.MobRenderType.human = 3;
Native.MobRenderType.ironGolem = 42;
Native.MobRenderType.item = 4;
Native.MobRenderType.lavaSlime = 16;
Native.MobRenderType.lightningBolt = 41;
Native.MobRenderType.map = 50;
Native.MobRenderType.minecart = 34;
Native.MobRenderType.mushroomCow = 7;
Native.MobRenderType.ocelot = 43;
Native.MobRenderType.painting = 32;
Native.MobRenderType.pig = 8;
Native.MobRenderType.player = 27;
Native.MobRenderType.rabbit = 46;
Native.MobRenderType.sheep = 9;
Native.MobRenderType.silverfish = 21;
Native.MobRenderType.skeleton = 19;
Native.MobRenderType.slime = 23;
Native.MobRenderType.smallFireball = 38;
Native.MobRenderType.snowGolem = 44;
Native.MobRenderType.snowball = 29;
Native.MobRenderType.spider = 20;
Native.MobRenderType.squid = 36;
Native.MobRenderType.thrownPotion = 31;
Native.MobRenderType.tnt = 2;
Native.MobRenderType.unknownItem = 30;
Native.MobRenderType.villager = 12;
Native.MobRenderType.villagerZombie = 39;
Native.MobRenderType.witch = 47;
Native.MobRenderType.wolf = 11;
Native.MobRenderType.zombie = 14;
Native.MobRenderType.zombiePigman = 15;
Native.PotionEffect = {};
Native.PotionEffect.absorption = 22;
Native.PotionEffect.blindness = 15;
Native.PotionEffect.confusion = 9;
Native.PotionEffect.damageBoost = 5;
Native.PotionEffect.damageResistance = 11;
Native.PotionEffect.digSlowdown = 4;
Native.PotionEffect.digSpeed = 3;
Native.PotionEffect.fireResistance = 12;
Native.PotionEffect.harm = 7;
Native.PotionEffect.heal = 6;
Native.PotionEffect.healthBoost = 21;
Native.PotionEffect.hunger = 17;
Native.PotionEffect.invisibility = 14;
Native.PotionEffect.jump = 8;
Native.PotionEffect.movementSlowdown = 2;
Native.PotionEffect.movementSpeed = 1;
Native.PotionEffect.nightVision = 16;
Native.PotionEffect.poison = 19;
Native.PotionEffect.regeneration = 10;
Native.PotionEffect.saturation = 23;
Native.PotionEffect.waterBreathing = 13;
Native.PotionEffect.weakness = 18;
Native.PotionEffect.wither = 20;
Native.Dimension = {};
Native.Dimension.END = 2;
Native.Dimension.NETHER = 1;
Native.Dimension.NORMAL = 0;
Native.ItemAnimation = {};
Native.ItemAnimation.bow = 4;
Native.ItemAnimation.normal = 0;
Native.BlockSide = {};
Native.BlockSide.DOWN = 0;
Native.BlockSide.EAST = 5;
Native.BlockSide.NORTH = 2;
Native.BlockSide.SOUTH = 3;
Native.BlockSide.UP = 1;
Native.BlockSide.WEST = 4;
Native.Enchantment = {};
Native.Enchantment.AQUA_AFFINITY = 7;
Native.Enchantment.BANE_OF_ARTHROPODS = 11;
Native.Enchantment.BLAST_PROTECTION = 3;
Native.Enchantment.DEPTH_STRIDER = 8;
Native.Enchantment.EFFICIENCY = 15;
Native.Enchantment.FEATHER_FALLING = 2;
Native.Enchantment.FIRE_ASPECT = 13;
Native.Enchantment.FIRE_PROTECTION = 1;
Native.Enchantment.FLAME = 21;
Native.Enchantment.FORTUNE = 18;
Native.Enchantment.INFINITY = 22;
Native.Enchantment.KNOCKBACK = 12;
Native.Enchantment.LOOTING = 14;
Native.Enchantment.LUCK_OF_THE_SEA = 23;
Native.Enchantment.LURE = 24;
Native.Enchantment.POWER = 19;
Native.Enchantment.PROJECTILE_PROTECTION = 4;
Native.Enchantment.PROTECTION = 0;
Native.Enchantment.PUNCH = 20;
Native.Enchantment.RESPIRATION = 6;
Native.Enchantment.SHARPNESS = 9;
Native.Enchantment.SILK_TOUCH = 16;
Native.Enchantment.SMITE = 10;
Native.Enchantment.THORNS = 5;
Native.Enchantment.UNBREAKING = 17;
Native.EnchantType = {};
Native.EnchantType.all = 16383;
Native.EnchantType.axe = 512;
Native.EnchantType.book = 16383;
Native.EnchantType.bow = 32;
Native.EnchantType.fishingRod = 4096;
Native.EnchantType.flintAndSteel = 256;
Native.EnchantType.hoe = 64;
Native.EnchantType.pickaxe = 1024;
Native.EnchantType.shears = 128;
Native.EnchantType.shovel = 2048;
Native.EnchantType.weapon = 16;
Native.BlockRenderLayer = {};
Native.BlockRenderLayer.alpha = 4099;
Native.BlockRenderLayer.alpha_seasons = 5;
Native.BlockRenderLayer.alpha_single_side = 4;
Native.BlockRenderLayer.blend = 6;
Native.BlockRenderLayer.doubleside = 2;
Native.BlockRenderLayer.far = 9;
Native.BlockRenderLayer.opaque = 0;
Native.BlockRenderLayer.opaque_seasons = 1;
Native.BlockRenderLayer.seasons_far = 10;
Native.BlockRenderLayer.seasons_far_alpha = 11;
Native.BlockRenderLayer.water = 7;
function alert() {}
function ItemExtraData() {}
function RenderMesh() {}
