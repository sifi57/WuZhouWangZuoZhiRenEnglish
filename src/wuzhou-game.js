/* ============================================================
   武周·王佐之人 — Core Game Engine (game.js)
   A card roguelike inspired by Arknights Integrated Strategies
   ============================================================ */

/* ---------- CSS injection ---------- */
(function injectStyles() {
  if (document.getElementById('wuzhou-styles')) return;
  var s = document.createElement('style');
  s.id = 'wuzhou-styles';
  s.textContent = [
    '*, *::before, *::after { box-sizing:border-box; margin:0; padding:0; }',
    '#game-container { width:100%; min-height:100vh; background:#0a0a0f; color:#d4c5a0; font-family:"Noto Serif SC","SimSun","STSong",serif; overflow-x:hidden; position:relative; }',
    '.menu-bg { display:flex; flex-direction:column; align-items:center; justify-content:center; min-height:100vh; background:radial-gradient(ellipse at 50% 30%,#1a1510 0%,#0a0a0f 70%); text-align:center; padding:20px; }',
    '.menu-title { font-size:clamp(2.4rem,6vw,4.2rem); color:#c8a84e; text-shadow:0 0 30px rgba(200,168,78,.4); letter-spacing:.25em; margin-bottom:12px; font-weight:700; }',
    '.menu-subtitle { font-size:clamp(1rem,2.5vw,1.4rem); color:#8a7a5a; letter-spacing:.35em; margin-bottom:48px; }',
    '.menu-decor { width:180px; height:2px; background:linear-gradient(90deg,transparent,#c8a84e,transparent); margin:0 auto 40px; }',
    '.btn { display:inline-block; padding:14px 48px; border:1px solid #c8a84e; background:transparent; color:#c8a84e; font-size:1.1rem; font-family:inherit; cursor:pointer; letter-spacing:.2em; transition:all .3s; border-radius:2px; margin:8px; }',
    '.btn:hover { background:#c8a84e; color:#0a0a0f; box-shadow:0 0 20px rgba(200,168,78,.3); }',
    '.btn-sm { padding:8px 20px; font-size:.85rem; }',
    '.btn-danger { border-color:#a04040; color:#a04040; }',
    '.btn-danger:hover { background:#a04040; color:#fff; }',
    '.btn-confirm { border-color:#50a050; color:#50a050; }',
    '.btn-confirm:hover { background:#50a050; color:#fff; }',
    '.panel { max-width:900px; margin:0 auto; padding:24px; }',
    '.chapter-header { text-align:center; padding:40px 20px 20px; font-size:1.8rem; color:#c8a84e; letter-spacing:.15em; }',
    '.opening-box { background:rgba(20,18,14,.92); border:1px solid #3a3020; border-radius:4px; padding:28px 32px; margin:16px auto; max-width:760px; min-height:180px; position:relative; line-height:1.9; font-size:1.05rem; }',
    '.opening-speaker { color:#c8a84e; font-weight:700; margin-bottom:10px; font-size:1.1rem; }',
    '.opening-text { color:#d4c5a0; }',
    '.opening-text .cursor { display:inline-block; width:2px; height:1.1em; background:#c8a84e; animation:blink .7s infinite; vertical-align:text-bottom; margin-left:2px; }',
    '@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }',
    '.choices-list { margin-top:20px; }',
    '.choice-btn { display:block; width:100%; text-align:left; padding:12px 18px; margin:8px 0; border:1px solid #3a3020; background:rgba(30,26,20,.8); color:#d4c5a0; font-family:inherit; font-size:.95rem; cursor:pointer; transition:all .25s; border-radius:2px; }',
    '.choice-btn:hover { border-color:#c8a84e; background:rgba(200,168,78,.1); color:#c8a84e; }',
    '.fa-top { display:flex; justify-content:space-between; align-items:center; padding:12px 20px; border-bottom:1px solid #2a2418; flex-wrap:wrap; gap:8px; }',
    '.fa-ap { color:#c8a84e; font-size:1.1rem; }',
    '.fa-stats { font-size:.85rem; color:#8a7a5a; }',
    '.map-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(200px,1fr)); gap:16px; padding:20px; max-width:900px; margin:0 auto; }',
    '.map-node { border:1px solid #2a2418; border-radius:4px; padding:16px; background:rgba(20,18,14,.85); cursor:pointer; transition:all .25s; text-align:center; }',
    '.map-node:hover { border-color:#c8a84e; transform:translateY(-2px); box-shadow:0 4px 15px rgba(0,0,0,.4); }',
    '.map-node.visited { opacity:.5; pointer-events:none; }',
    '.map-node-title { color:#c8a84e; font-size:1rem; margin-bottom:6px; }',
    '.map-node-desc { color:#8a7a5a; font-size:.82rem; }',
    '.map-node-cost { color:#a08050; font-size:.8rem; margin-top:6px; }',
    '.battle-wrap { padding:12px; }',
    '.battle-info { text-align:center; padding:8px; font-size:1rem; color:#c8a84e; border-bottom:1px solid #2a2418; margin-bottom:10px; }',
    '.battle-field { display:flex; flex-direction:column; gap:12px; }',
    '.battle-side { display:flex; gap:8px; justify-content:center; flex-wrap:wrap; padding:8px 0; }',
    '.battle-side.enemy { border-bottom:1px dashed #2a2418; padding-bottom:14px; }',
    '.off-card { width:140px; border:1px solid #2a2418; border-radius:4px; padding:10px; background:rgba(20,18,14,.9); text-align:center; transition:all .25s; position:relative; flex-shrink:0; }',
    '.off-card.dead { opacity:.35; }',
    '.off-card.selected { border-color:#c8a84e; box-shadow:0 0 12px rgba(200,168,78,.25); }',
    '.off-card.target-sel { border-color:#e06040; box-shadow:0 0 10px rgba(224,96,64,.3); cursor:pointer; }',
    '.off-name { font-size:.9rem; color:#c8a84e; margin-bottom:4px; }',
    '.off-stat { font-size:.75rem; color:#8a7a5a; line-height:1.6; }',
    '.off-hp-bar { height:4px; background:#1a1510; border-radius:2px; margin-top:4px; overflow:hidden; }',
    '.off-hp-fill { height:100%; background:#6a4; transition:width .3s; }',
    '.off-hp-fill.low { background:#a44; }',
    '.off-shield-bar { height:3px; background:#1a1510; border-radius:2px; margin-top:2px; overflow:hidden; }',
    '.off-shield-fill { height:100%; background:#48a; transition:width .3s; }',
    '.hand-area { border-top:1px solid #2a2418; padding:12px; margin-top:8px; }',
    '.hand-label { font-size:.85rem; color:#8a7a5a; margin-bottom:8px; }',
    '.hand-cards { display:flex; gap:8px; flex-wrap:wrap; }',
    '.card { padding:8px 12px; border:1px solid #3a3020; border-radius:3px; background:rgba(30,26,20,.9); cursor:pointer; transition:all .2s; font-size:.82rem; color:#d4c5a0; min-width:90px; text-align:center; }',
    '.card:hover { border-color:#c8a84e; transform:translateY(-3px); }',
    '.card .card-name { color:#c8a84e; font-weight:700; }',
    '.card .card-desc { color:#8a7a5a; font-size:.72rem; margin-top:2px; }',
    '.card.used { opacity:.3; pointer-events:none; }',
    '.battle-log { max-height:120px; overflow-y:auto; padding:8px 12px; font-size:.78rem; color:#6a6050; border-top:1px solid #1a1510; margin-top:8px; }',
    '.battle-log p { margin:2px 0; }',
    '.battle-actions { text-align:center; padding:10px; }',
    '.pool-overlay { position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,.7); display:flex; align-items:center; justify-content:center; z-index:100; }',
    '.pool-box { background:#14120e; border:1px solid #3a3020; border-radius:6px; padding:24px; max-width:600px; width:90%; }',
    '.pool-title { text-align:center; color:#c8a84e; margin-bottom:16px; font-size:1.1rem; }',
    '.pool-cards { display:flex; gap:10px; flex-wrap:wrap; justify-content:center; }',
    '.pool-card { padding:10px 14px; border:1px solid #3a3020; border-radius:4px; background:rgba(30,26,20,.9); cursor:pointer; transition:all .2s; text-align:center; min-width:120px; }',
    '.pool-card:hover { border-color:#c8a84e; }',
    '.pool-card.picked { border-color:#50a050; background:rgba(80,160,80,.1); }',
    '.ending-box { text-align:center; padding:40px 20px; max-width:700px; margin:0 auto; }',
    '.ending-title { font-size:1.6rem; color:#c8a84e; margin-bottom:20px; }',
    '.ending-text { line-height:1.9; margin-bottom:30px; color:#d4c5a0; }',
    '.roster-grid { display:flex; gap:10px; flex-wrap:wrap; justify-content:center; padding:12px; }',
    '.roster-card { width:130px; border:1px solid #2a2418; border-radius:4px; padding:10px; background:rgba(20,18,14,.9); text-align:center; cursor:pointer; transition:all .25s; }',
    '.roster-card:hover { border-color:#c8a84e; }',
    '.roster-card.active { border-color:#50a050; background:rgba(80,160,80,.08); }',
    '.notif { position:fixed; top:20px; left:50%; transform:translateX(-50%); background:#1a1510; border:1px solid #c8a84e; color:#c8a84e; padding:10px 24px; border-radius:4px; z-index:200; animation:fadeNotif 2.5s forwards; font-size:.9rem; }',
    '@keyframes fadeNotif { 0%{opacity:0;top:10px} 10%{opacity:1;top:20px} 80%{opacity:1} 100%{opacity:0} }',
    '@media(max-width:600px){ .off-card{width:110px;padding:8px} .map-grid{grid-template-columns:1fr 1fr;gap:10px;padding:12px} .opening-box{padding:18px 16px} }'
  ].join('\n');
  document.head.appendChild(s);
})();

import { GameData } from "./wuzhou-data.js";

/* ---------- Global Game object ---------- */
export var Game = {
  root: null,
  state: null,
  _typewriterTimer: null,

  init: function () {
    this.root = document.getElementById('game-container');
    if (!this.root) { this.root = document.createElement('div'); this.root.id='game-container'; document.body.appendChild(this.root); }
    this.state = null;
    this.renderMenu();
  },

  newGame: function () {
    this.state = {
      chapter: 1,
      phase: 'opening',
      player: {
        name: '高寅',
        stats: { wenCai:5, zhiMou:3, wuLi:2, lengKu:0 },
        actionPoints: 10,
        politicalChips: 50,
        faction: null,
      },
      factionAffinity: { taiping:0, longji:0, lidan:0, wushi:0, wuzetian:50 },
      officialRoster: ['gaoyin'],
      completedEvents: [],
      unlockedEvents: [],
      currentBattle: null,
      flags: {},
    };
    this.startChapter(1);
  },

  startChapter: function (n) {
    this.state.chapter = n;
    this.state.player.actionPoints = 10;
    this.state.phase = 'opening';
    this._openingIndex = 0;
    this.renderOpening();
  },

  startOpening: function () {
    this.state.phase = 'opening';
    this._openingIndex = 0;
    this.renderOpening();
  },

  startFreeAction: function () {
    this.state.phase = 'freeAction';
    this.renderFreeAction();
  },

  startCourtDebate: function () {
    this.state.phase = 'courtDebate';
    this._selectingOfficials = true;
    this._selectedForBattle = [];
    this.renderOfficialSelect();
  },

  startEnding: function () {
    this.state.phase = 'ending';
    this.renderEnding();
  },

  triggerEvent: function (id) {
    var ev = GameData.events.find(function(e){ return e.id === id; });
    if (!ev) return;
    this.state.phase = 'event';
    this._currentEvent = ev;
    this.renderEvent(ev);
  },

  processChoice: function (eventId, idx) {
    var ev = GameData.events.find(function(e){ return e.id === eventId; });
    if (!ev) return;
    var ch = ev.choices[idx];
    if (!ch) return;
    var eff = ch.effects || {};
    var st = this.state;
    if (eff.wenCai)  st.player.stats.wenCai  += eff.wenCai;
    if (eff.zhiMou)  st.player.stats.zhiMou  += eff.zhiMou;
    if (eff.wuLi)    st.player.stats.wuLi    += eff.wuLi;
    if (eff.lengKu)  st.player.stats.lengKu  += eff.lengKu;
    if (eff.taiping)  st.factionAffinity.taiping  += eff.taiping;
    if (eff.longji)   st.factionAffinity.longji   += eff.longji;
    if (eff.lidan)    st.factionAffinity.lidan    += eff.lidan;
    if (eff.wushi)    st.factionAffinity.wushi    += eff.wushi;
    if (eff.wuzetian) st.factionAffinity.wuzetian += eff.wuzetian;
    if (ch.unlock && st.officialRoster.indexOf(ch.unlock) === -1) {
      st.officialRoster.push(ch.unlock);
      this.notify('Recruited a new official!');
    }
    if (ch.flag) st.flags[ch.flag] = true;
    if (st.completedEvents.indexOf(eventId) === -1) st.completedEvents.push(eventId);
    if (ev.type === 'side' || ev.type !== 'main') {
      var cost = ev.cost || 2;
      st.player.actionPoints = Math.max(0, st.player.actionPoints - cost);
    }
    this.renderEventResult(ev, ch);
  },

  getAvailableEvents: function () {
    var st = this.state;
    var self = this;
    return GameData.events.filter(function(ev) {
      if (ev.chapter !== st.chapter) return false;
      if (st.completedEvents.indexOf(ev.id) !== -1) return false;
      if (ev.type === 'main') return true;
      var cost = ev.cost || 2;
      if (cost > st.player.actionPoints) return false;
      return true;
    });
  },

  initBattle: function (playerOfficialIds, enemySet) {
    var self = this;
    function makeUnit(src, isEnemy) {
      return {
        id: src.id, name: src.name, title: src.title || '',
        atk: src.atk, baseAtk: src.atk,
        hp: src.hp, maxHp: src.hp,
        shield: src.shield || 0,
        deckTemplate: src.deck.slice(),
        deck: [], hand: [],
        isEnemy: isEnemy, dead: false,
      };
    }
    var playerUnits = playerOfficialIds.map(function(id) {
      var o = GameData.officials.find(function(x){ return x.id===id; });
      return makeUnit(o, false);
    });
    var enemyUnits = enemySet.officials.map(function(o) { return makeUnit(o, true); });
    function shuffle(arr) { for(var i=arr.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1));var t=arr[i];arr[i]=arr[j];arr[j]=t;} return arr; }
    playerUnits.concat(enemyUnits).forEach(function(u) {
      u.deck = shuffle(u.deckTemplate.slice());
    });
    this.state.currentBattle = {
      playerUnits: playerUnits,
      enemyUnits: enemyUnits,
      turn: 1,
      phase: 'player',
      log: [],
      selectedCard: null,
      poolPicks: 0,
      maxPoolPicks: 2,
      currentPool: [],
      pickedPoolCards: [],
      cardsPlayedThisTurn: 0,
    };
    this.state.phase = 'battle';
    this.startTurn();
  },

  startTurn: function () {
    var b = this.state.currentBattle;
    b.phase = 'player';
    b.selectedCard = null;
    b.cardsPlayedThisTurn = 0;
    var self = this;
    b.playerUnits.forEach(function(u) {
      if (u.dead) return;
      for (var i=0; i<2; i++) {
        if (u.deck.length === 0) u.deck = self._shuffleArray(u.deckTemplate.slice());
        if (u.deck.length > 0) u.hand.push(self._makeCard(u.deck.shift(), u));
      }
      u.hand.push({ type:'yanLun', name:'言论', desc:'造成'+u.atk+'点伤害', value:0, owner:u.id, consumable:false });
    });
    b.enemyUnits.forEach(function(u) {
      if (u.dead) return;
      for (var i=0; i<2; i++) {
        if (u.deck.length === 0) u.deck = self._shuffleArray(u.deckTemplate.slice());
        if (u.deck.length > 0) u.hand.push(self._makeCard(u.deck.shift(), u));
      }
      u.hand.push({ type:'yanLun', name:'言论', desc:'造成'+u.atk+'点伤害', value:0, owner:u.id, consumable:false });
    });
    b.log.push('—— Turn ' + b.turn + ' ——');
    this.renderBattle();
  },

  _makeCard: function (type, unit) {
    var cards = {
      yanLun:     { type:'yanLun',     name:'Speech',   desc:'Deal '+unit.atk+' damage', value:0 },
      qiangHua:   { type:'qiangHua',   name:'Strengthen',   desc:'+2 Words',              value:2 },
      dieJia:     { type:'dieJia',     name:'Armor Up',   desc:'+3 Shield',              value:3 },
      dunFan:     { type:'dunFan',     name:'Shield Counter',   desc:'Counter attack with shield',          value:0 },
      zhongShang: { type:'zhongShang', name:'Slander',   desc:'-2 Enemy Words',           value:2 },
      zhuanYi:    { type:'zhuanYi',    name:'Transfer',   desc:'Transfer a card in hand',          value:0 },
    };
    var c = cards[type] || cards.yanLun;
    return { type:c.type, name:c.name, desc:c.desc, value:c.value, owner:unit.id, consumable:false };
  },

  playCard: function (unitIndex, cardIndex, targetIndex) {
    var b = this.state.currentBattle;
    if (b.phase !== 'player') return;
    var unit = b.playerUnits[unitIndex];
    if (!unit || unit.dead) return;
    var card = unit.hand[cardIndex];
    if (!card) return;
    var target = null;
    var needsEnemyTarget = (card.type === 'yanLun' || card.type === 'zhongShang');
    var needsFriendTarget = (card.type === 'qiangHua' || card.type === 'dieJia' || card.type === 'heal');
    var isAoe = (card.type === 'aoe');

    if (needsEnemyTarget) {
      target = b.enemyUnits[targetIndex];
      if (!target || target.dead) return;
    } else if (needsFriendTarget) {
      target = b.playerUnits[targetIndex];
      if (!target || target.dead) return;
    } else if (card.type === 'dunFan') {
      target = b.enemyUnits[targetIndex];
      if (!target || target.dead) return;
    }

    this._resolveCard(card, unit, target, b, false, isAoe);
    unit.hand.splice(cardIndex, 1);
    b.cardsPlayedThisTurn++;
    var result = this.checkBattleEnd();
    if (result) { this._endBattle(result); return; }
    this.renderBattle();
  },

  _resolveCard: function (card, source, target, b, isEnemy, isAoe) {
    var dmg, logPrefix;
    logPrefix = source.name;
    switch (card.type) {
      case 'yanLun':
        dmg = source.atk;
        this._dealDamage(target, dmg, b);
        b.log.push(logPrefix + ' attacks ' + target.name + ' with Speech, dealing ' + dmg + ' damage');
        break;
      case 'qiangHua':
        var val = card.value || 2;
        target.atk += val;
        b.log.push(logPrefix + ' strengthens ' + target.name + ', Words +' + val);
        break;
      case 'dieJia':
        var sv = card.value || 3;
        target.shield += sv;
        b.log.push(logPrefix + ' arms ' + target.name + ', Shield +' + sv);
        break;
      case 'dunFan':
        if (source.shield > 0) {
          this._dealDamage(target, source.shield, b);
          b.log.push(logPrefix + ' counters ' + target.name + ' with shield, dealing ' + source.shield + ' damage');
        } else {
          b.log.push(logPrefix + ' counter failed - no shield');
        }
        break;
      case 'zhongShang':
        var dv = card.value || 2;
        target.atk = Math.max(0, target.atk - dv);
        b.log.push(logPrefix + ' slanders ' + target.name + ', Words -' + dv);
        break;
      case 'zhuanYi':
        b.log.push(logPrefix + ' uses Transfer (Hand reshuffle)');
        break;
      case 'heal':
        var hv = card.value || 6;
        target.hp = Math.min(target.maxHp, target.hp + hv);
        b.log.push(logPrefix + ' restores ' + hv + ' Will for ' + target.name);
        break;
      case 'aoe':
        var targets = isEnemy ? b.playerUnits : b.enemyUnits;
        var self = this;
        targets.forEach(function(t) {
          if (!t.dead) { self._dealDamage(t, 2, b); }
        });
        b.log.push(logPrefix + ' debates fiercely, dealing 2 damage to all enemies');
        break;
    }
  },

  _dealDamage: function (target, dmg, b) {
    if (target.shield > 0) {
      var absorbed = Math.min(target.shield, dmg);
      target.shield -= absorbed;
      dmg -= absorbed;
    }
    target.hp -= dmg;
    if (target.hp <= 0) { target.hp = 0; target.dead = true; }
  },

  endPlayerTurn: function () {
    var b = this.state.currentBattle;
    if (b.phase !== 'player') return;
    b.phase = 'enemy';
    this.enemyTurn();
  },

  enemyTurn: function () {
    var b = this.state.currentBattle;
    var self = this;
    b.log.push('—— Enemy Turn ——');
    b.enemyUnits.forEach(function(u) {
      if (u.dead) return;
      var targets = b.playerUnits.filter(function(p){ return !p.dead; });
      if (targets.length === 0) return;
      targets.sort(function(a,b){ return a.hp - b.hp; });
      var hand = u.hand.slice();
      u.hand = [];
      hand.forEach(function(card) {
        var aliveTargets = b.playerUnits.filter(function(p){ return !p.dead; });
        if (aliveTargets.length === 0) return;
        aliveTargets.sort(function(a,b){ return a.hp - b.hp; });
        var aliveAllies = b.enemyUnits.filter(function(e){ return !e.dead; });
        var target;
        if (card.type === 'yanLun' || card.type === 'zhongShang' || card.type === 'dunFan' || card.type === 'aoe') {
          target = aliveTargets[0];
          self._resolveCard(card, u, target, b, true, card.type==='aoe');
        } else if (card.type === 'qiangHua' || card.type === 'dieJia' || card.type === 'heal') {
          target = aliveAllies[0];
          self._resolveCard(card, u, target, b, true, false);
        } else {
          target = aliveTargets[0];
          self._resolveCard(card, u, target, b, true, false);
        }
      });
    });
    var result = this.checkBattleEnd();
    if (result) { this._endBattle(result); return; }
    this._showCommonPool();
  },

  _showCommonPool: function () {
    var b = this.state.currentBattle;
    var pool = GameData.commonPool ? this._shuffleArray(GameData.commonPool.slice()).slice(0,4) : [];
    b.currentPool = pool;
    b.poolPicks = 0;
    b.pickedPoolCards = [];
    b.phase = 'poolSelect';
    this.renderBattle();
  },

  _pickPoolCard: function (idx) {
    var b = this.state.currentBattle;
    if (b.poolPicks >= b.maxPoolPicks) return;
    if (b.pickedPoolCards.indexOf(idx) !== -1) return;
    b.pickedPoolCards.push(idx);
    b.poolPicks++;
    var card = b.currentPool[idx];
    var alive = b.playerUnits.filter(function(u){ return !u.dead; });
    if (alive.length > 0) {
      var u = alive[Math.floor(Math.random()*alive.length)];
      u.hand.push({ type:card.type, name:card.name, desc:card.desc, value:card.value, owner:u.id, consumable:true });
      b.log.push('Obtained card [' + card.name + '] -> ' + u.name);
    }
    this.renderBattle();
  },

  _finishPoolSelect: function () {
    var b = this.state.currentBattle;
    b.turn++;
    this.startTurn();
  },

  checkBattleEnd: function () {
    var b = this.state.currentBattle;
    if (!b) return null;
    var playerAlive = b.playerUnits.some(function(u){ return !u.dead; });
    var enemyAlive = b.enemyUnits.some(function(u){ return !u.dead; });
    if (!enemyAlive) return 'win';
    if (!playerAlive) return 'lose';
    return null;
  },

  _endBattle: function (result) {
    var b = this.state.currentBattle;
    b.phase = 'end';
    b.result = result;
    this.renderBattle();
  },

  render: function () {
    switch(this.state.phase) {
      case 'opening': this.renderOpening(); break;
      case 'freeAction': this.renderFreeAction(); break;
      case 'courtDebate': this.renderOfficialSelect(); break;
      case 'battle': this.renderBattle(); break;
      case 'ending': this.renderEnding(); break;
      case 'event': break;
      default: this.renderMenu();
    }
  },

  renderMenu: function () {
    var self = this;
    var hasSave = false;
    try { hasSave = !!localStorage.getItem('wuzhou_save'); } catch(e){}
    var h = '<div class="menu-bg">';
    h += '<div style="margin-bottom:20px;color:#3a3020;font-size:.75rem;letter-spacing:.3em;">— Wu Zhou —</div>';
    h += '<div class="menu-title">Wu Zhou: The King\'s Advisor</div>';
    h += '<div class="menu-subtitle">Talent of a King\'s Advisor, Strategy in a Chaotic World</div>';
    h += '<div class="menu-decor"></div>';
    h += '<div>';
    h += '<button class="btn" onclick="window.GameInstance.newGame()">New Game</button>';
    if (hasSave) h += '<button class="btn" onclick="window.GameInstance.loadGame()">Continue Game</button>';
    h += '</div>';
    h += '<div style="margin-top:60px;color:#3a3020;font-size:.7rem;letter-spacing:.2em;">First Year of Yongchang · Divine Capital Luoyang</div>';
    h += '</div>';
    this.root.innerHTML = h;
  },

  renderOpening: function () {
    var self = this;
      var ch = GameData.chapters.find(function(c){ return c.num === self.state.chapter; });
      if (!ch) { this.startFreeAction(); return; }
      var lines = ch.opening;
      if (!this._openingIndex) this._openingIndex = 0;
      var line = lines[this._openingIndex];
      var h = '<div class="chapter-header">' + ch.title + '</div>';
      h += '<div class="opening-box" id="opening-box">';
      if (line) {
        h += '<div class="opening-speaker">' + line.speaker + '</div>';
        h += '<div class="opening-text" id="opening-text"></div>';
      }
      h += '</div>';
      h += '<div style="text-align:center;padding:16px;">';
      h += '<button class="btn btn-sm" id="opening-next" style="visibility:hidden;" onclick="window.GameInstance._advanceOpening()">Continue</button>';
      h += '</div>';
      this.root.innerHTML = h;
    if (line) this._typewrite(line.text, 'opening-text', function() {
      var btn = document.getElementById('opening-next');
      if (btn) btn.style.visibility = 'visible';
    });
  },

  _advanceOpening: function () {
    var self = this;
    var ch = GameData.chapters.find(function(c){ return c.num === self.state.chapter; });
    this._openingIndex++;
    if (this._openingIndex >= ch.opening.length) {
      var mainEvt = GameData.events.find(function(e) {
        return e.chapter === self.state.chapter && e.type === 'main' && self.state.completedEvents.indexOf(e.id) === -1;
      });
      if (mainEvt) {
        this.triggerEvent(mainEvt.id);
      } else {
        this.startFreeAction();
      }
    } else {
      this.renderOpening();
    }
  },

  renderFreeAction: function () {
    var self = this;
    var st = this.state;
    var events = this.getAvailableEvents().filter(function(e){ return e.type === 'side'; });
    var h = '<div class="fa-top">';
    h += '<div class="fa-ap">Action Points: ' + st.player.actionPoints + ' / 10</div>';
    h += '<div class="fa-stats">';
    h += 'Literary:' + st.player.stats.wenCai + ' Strategy:' + st.player.stats.zhiMou + ' Martial:' + st.player.stats.wuLi + ' Ruthless:' + st.player.stats.lengKu;
    h += ' | Officials:' + st.officialRoster.length;
    h += '</div>';
    h += '</div>';
    h += '<div class="chapter-header" style="font-size:1.2rem;padding:16px;">' + this._getChapterTitle() + ' · Free Action</div>';
    h += '<div class="map-grid">';
    events.forEach(function(ev) {
      var visited = st.completedEvents.indexOf(ev.id) !== -1;
      h += '<div class="map-node' + (visited?' visited':'') + '" onclick="window.GameInstance.triggerEvent(\'' + ev.id + '\')">';
      h += '<div class="map-node-title">' + ev.title + '</div>';
      h += '<div class="map-node-desc">' + (ev.text ? ev.text.substring(0,30)+'...' : '') + '</div>';
      h += '<div class="map-node-cost">Action Points -' + (ev.cost||0) + '</div>';
      h += '</div>';
    });
    h += '<div class="map-node" onclick="window.GameInstance.startCourtDebate()" style="border-color:#a04040;">';
    h += '<div class="map-node-title" style="color:#e06040;">Court Debate</div>';
    h += '<div class="map-node-desc">Enter the battle of this chapter</div>';
    h += '</div>';
    if (st.player.actionPoints >= 2) {
      h += '<div class="map-node" onclick="window.GameInstance._rest()">';
      h += '<div class="map-node-title">Rest</div>';
      h += '<div class="map-node-desc">Recover energy, organize thoughts</div>';
      h += '<div class="map-node-cost">Action Points -2</div>';
      h += '</div>';
    }
    h += '</div>';
    h += '<div style="text-align:center;padding:16px;">';
    h += '<button class="btn btn-sm" onclick="window.GameInstance.saveGame()">Save</button>';
    h += '</div>';
    this.root.innerHTML = h;
  },

  _rest: function () {
    if (this.state.player.actionPoints < 2) return;
    this.state.player.actionPoints -= 2;
    this.state.player.stats.wenCai += 1;
    this.notify('+1 Literary Talent (Rest)');
    this.renderFreeAction();
  },

  renderEvent: function (ev) {
    var h = '<div class="chapter-header" style="font-size:1.2rem;">' + ev.title + '</div>';
    h += '<div class="opening-box">';
    h += '<div class="opening-text">' + ev.text + '</div>';
    h += '<div class="choices-list">';
    ev.choices.forEach(function(ch, i) {
      h += '<button class="choice-btn" onclick="window.GameInstance.processChoice(\'' + ev.id + '\',' + i + ')">' + ch.text + '</button>';
    });
    h += '</div></div>';
    this.root.innerHTML = h;
  },

  renderEventResult: function (ev, choice) {
    var self = this;
    var h = '<div class="chapter-header" style="font-size:1.2rem;">' + ev.title + '</div>';
    h += '<div class="opening-box">';
    h += '<div class="opening-text">' + choice.result + '</div>';
    var effs = [];
    var e = choice.effects || {};
    if (e.wenCai) effs.push('Literary ' + (e.wenCai>0?'+':'') + e.wenCai);
    if (e.zhiMou) effs.push('Strategy ' + (e.zhiMou>0?'+':'') + e.zhiMou);
    if (e.wuLi)   effs.push('Martial ' + (e.wuLi>0?'+':'') + e.wuLi);
    if (e.lengKu) effs.push('Ruthless ' + (e.lengKu>0?'+':'') + e.lengKu);
    if (choice.unlock) effs.push('Recruit: ' + this._officialName(choice.unlock));
    if (effs.length) {
      h += '<div style="margin-top:14px;color:#8a7a5a;font-size:.85rem;">' + effs.join(' | ') + '</div>';
    }
    h += '</div>';
    h += '<div style="text-align:center;padding:16px;">';
    h += '<button class="btn btn-sm" onclick="window.GameInstance.startFreeAction()">Return</button>';
    h += '</div>';
    this.root.innerHTML = h;
  },

  renderOfficialSelect: function () {
    var self = this;
    var st = this.state;
    var selected = this._selectedForBattle || [];
    var h = '<div class="chapter-header" style="font-size:1.2rem;">Select Officials for Battle (Max 5)</div>';
    h += '<div class="roster-grid">';
    st.officialRoster.forEach(function(id) {
      var o = GameData.officials.find(function(x){ return x.id===id; });
      if (!o) return;
      var active = selected.indexOf(id) !== -1;
      h += '<div class="roster-card' + (active?' active':'') + '" onclick="window.GameInstance._toggleBattleOfficial(\'' + id + '\')">';
      h += '<div style="color:#c8a84e;font-weight:700;">' + o.name + '</div>';
      h += '<div style="color:#8a7a5a;font-size:.8rem;">' + (o.title||'') + '</div>';
      h += '<div style="font-size:.75rem;color:#6a6050;margin-top:4px;">Words:' + o.atk + ' Will:' + o.hp + ' Shield:' + o.shield + '</div>';
      h += '</div>';
    });
    h += '</div>';
    h += '<div style="text-align:center;padding:16px;">';
    if (selected.length > 0) {
      h += '<button class="btn btn-confirm" onclick="window.GameInstance._confirmBattle()">Deploy (' + selected.length + ')</button>';
    }
    h += '<button class="btn btn-sm" onclick="window.GameInstance.startFreeAction()" style="margin-left:12px;">Return</button>';
    h += '</div>';
    this.root.innerHTML = h;
  },

  _toggleBattleOfficial: function (id) {
    var sel = this._selectedForBattle;
    var idx = sel.indexOf(id);
    if (idx !== -1) { sel.splice(idx,1); }
    else if (sel.length < 5) { sel.push(id); }
    this.renderOfficialSelect();
  },

  _confirmBattle: function () {
    var sel = this._selectedForBattle;
    if (sel.length === 0) return;
    var ch = this.state.chapter;
    var es = GameData.enemySets.find(function(s){ return s.chapter === ch; });
    if (!es) es = GameData.enemySets[0];
    this.initBattle(sel, es);
  },

  renderBattle: function () {
    var self = this;
    var b = this.state.currentBattle;
    if (!b) return;
    var h = '<div class="battle-wrap">';
    h += '<div class="battle-info">Court Debate · Turn ' + b.turn;
    if (b.phase === 'player') h += ' — Your Turn';
    else if (b.phase === 'enemy') h += ' — Enemy Turn';
    else if (b.phase === 'poolSelect') h += ' — Select Card';
    h += '</div>';
    h += '<div class="battle-field">';
    h += '<div class="battle-side enemy">';
    b.enemyUnits.forEach(function(u, i) {
      h += self._renderUnit(u, i, true);
    });
    h += '</div>';
    h += '<div style="text-align:center;color:#3a3020;font-size:.75rem;letter-spacing:.3em;">— VS —</div>';
    h += '<div class="battle-side player">';
    b.playerUnits.forEach(function(u, i) {
      h += self._renderUnit(u, i, false);
    });
    h += '</div>';
    h += '</div>';
    if (b.phase === 'player') {
      h += '<div class="hand-area">';
      h += '<div class="hand-label">Hand (Click card to select, then click target to play)</div>';
      b.playerUnits.forEach(function(u, ui) {
        if (u.dead || u.hand.length === 0) return;
        h += '<div style="margin-bottom:8px;"><span style="color:#c8a84e;font-size:.82rem;">' + u.name + ': </span>';
        h += '<span class="hand-cards">';
        u.hand.forEach(function(c, ci) {
          var sel = (b.selectedCard && b.selectedCard.unitIndex===ui && b.selectedCard.cardIndex===ci) ? ' style="border-color:#c8a84e;background:rgba(200,168,78,.15);"' : '';
          h += '<span class="card"' + sel + ' onclick="window.GameInstance._selectCard(' + ui + ',' + ci + ')">';
          h += '<div class="card-name">' + c.name + '</div>';
          h += '<div class="card-desc">' + c.desc + '</div>';
          h += '</span>';
        });
        h += '</span></div>';
      });
      h += '</div>';
      h += '<div class="battle-actions">';
      h += '<button class="btn btn-sm btn-danger" onclick="window.GameInstance.endPlayerTurn()">End Turn</button>';
      h += '</div>';
    }
    if (b.phase === 'poolSelect') {
      h += '<div class="pool-overlay" id="pool-overlay">';
      h += '<div class="pool-box">';
      h += '<div class="pool-title">Select up to ' + b.maxPoolPicks + ' cards (Selected ' + b.poolPicks + '/' + b.maxPoolPicks + ')</div>';
      h += '<div class="pool-cards">';
      b.currentPool.forEach(function(c, i) {
        var picked = b.pickedPoolCards.indexOf(i) !== -1;
        h += '<div class="pool-card' + (picked?' picked':'') + '" onclick="window.GameInstance._pickPoolCard(' + i + ')">';
        h += '<div style="color:#c8a84e;font-weight:700;">' + c.name + '</div>';
        h += '<div style="color:#8a7a5a;font-size:.78rem;">' + c.desc + '</div>';
        h += '</div>';
      });
      h += '</div>';
      h += '<div style="text-align:center;margin-top:16px;">';
      h += '<button class="btn btn-sm" onclick="window.GameInstance._finishPoolSelect()">Confirm</button>';
      h += '</div></div></div>';
    }
    if (b.phase === 'end') {
      var won = b.result === 'win';
      h += '<div class="pool-overlay">';
      h += '<div class="pool-box" style="text-align:center;">';
      h += '<div class="pool-title" style="font-size:1.3rem;">' + (won?'Debate Won!':'Debate Lost...') + '</div>';
      h += '<div style="color:#8a7a5a;margin:16px 0;">' + (won?'You gained the upper hand in the court.':'Your words failed to overpower your opponent.') + '</div>';
      if (won) {
        h += '<button class="btn" onclick="window.GameInstance.startEnding()">Continue</button>';
      } else {
        h += '<button class="btn" onclick="window.GameInstance._retryBattle()">Retry</button>';
        h += '<button class="btn btn-sm" onclick="window.GameInstance.renderMenu()" style="margin-left:8px;">Main Menu</button>';
      }
      h += '</div></div>';
    }
    h += '<div class="battle-log" id="battle-log">';
    b.log.slice(-20).forEach(function(l) { h += '<p>' + l + '</p>'; });
    h += '</div>';
    h += '</div>';
    this.root.innerHTML = h;
    var logEl = document.getElementById('battle-log');
    if (logEl) logEl.scrollTop = logEl.scrollHeight;
  },

  _renderUnit: function (u, idx, isEnemy) {
    var b = this.state.currentBattle;
    var cls = 'off-card';
    if (u.dead) cls += ' dead';
    var targetable = false;
    if (b.phase === 'player' && b.selectedCard) {
      var sc = b.playerUnits[b.selectedCard.unitIndex].hand[b.selectedCard.cardIndex];
      if (sc) {
        var needEnemy = (sc.type==='yanLun'||sc.type==='zhongShang'||sc.type==='dunFan'||sc.type==='aoe');
        var needFriend = (sc.type==='qiangHua'||sc.type==='dieJia'||sc.type==='heal');
        if (isEnemy && needEnemy && !u.dead) { cls += ' target-sel'; targetable = true; }
        if (!isEnemy && needFriend && !u.dead) { cls += ' target-sel'; targetable = true; }
      }
    }
    var onclick = '';
    if (targetable) {
      onclick = ' onclick="window.GameInstance._selectTarget(' + idx + ',' + (isEnemy?'true':'false') + ')"';
    }
    var hpPct = u.maxHp > 0 ? Math.max(0, Math.round(u.hp/u.maxHp*100)) : 0;
    var shieldPct = u.shield > 0 ? Math.min(100, u.shield * 10) : 0;
    var h = '<div class="' + cls + '"' + onclick + '>';
    h += '<div class="off-name">' + u.name + '</div>';
    h += '<div class="off-stat">Words:' + u.atk + '</div>';
    h += '<div class="off-stat">Will:' + u.hp + '/' + u.maxHp + '</div>';
    if (u.shield > 0) h += '<div class="off-stat">Shield:' + u.shield + '</div>';
    h += '<div class="off-hp-bar"><div class="off-hp-fill' + (hpPct<30?' low':'') + '" style="width:'+hpPct+'%"></div></div>';
    if (u.shield > 0) h += '<div class="off-shield-bar"><div class="off-shield-fill" style="width:'+shieldPct+'%"></div></div>';
    if (!isEnemy && !u.dead) h += '<div style="font-size:.65rem;color:#5a5040;margin-top:4px;">Hand:' + u.hand.length + '</div>';
    h += '</div>';
    return h;
  },

  _selectCard: function (unitIndex, cardIndex) {
    var b = this.state.currentBattle;
    if (b.phase !== 'player') return;
    b.selectedCard = { unitIndex: unitIndex, cardIndex: cardIndex };
    this.renderBattle();
  },

  _selectTarget: function (targetIndex, isEnemy) {
    var b = this.state.currentBattle;
    if (!b.selectedCard) return;
    this.playCard(b.selectedCard.unitIndex, b.selectedCard.cardIndex, targetIndex);
    b.selectedCard = null;
  },

  _retryBattle: function () {
    this.startCourtDebate();
  },

  renderEnding: function () {
    var self = this;
    var ch = GameData.chapters.find(function(c){ return c.num === self.state.chapter; });
    var h = '<div class="ending-box">';
    h += '<div class="ending-title">' + (ch ? ch.title : 'Chapter '+this.state.chapter) + ' · End</div>';
    h += '<div class="ending-text">' + (ch ? ch.ending : 'Chapter ended.') + '</div>';
    var s = this.state.player.stats;
    h += '<div style="color:#8a7a5a;font-size:.85rem;margin-bottom:24px;">';
    h += 'Literary:' + s.wenCai + ' | Strategy:' + s.zhiMou + ' | Martial:' + s.wuLi + ' | Ruthless:' + s.lengKu;
    h += ' | Officials:' + this.state.officialRoster.length;
    h += '</div>';
    if (this.state.chapter < 6) {
      h += '<button class="btn" onclick="window.GameInstance._nextChapter()">Next Chapter</button>';
    } else {
      h += '<div style="color:#c8a84e;font-size:1.1rem;margin-bottom:20px;">Game Over</div>';
      h += '<div style="color:#8a7a5a;font-size:.9rem;margin-bottom:20px;">' + this._getFinalEnding() + '</div>';
      h += '<button class="btn" onclick="window.GameInstance.renderMenu()">Main Menu</button>';
    }
    h += '</div>';
    this.root.innerHTML = h;
  },

  _nextChapter: function () {
    this.state.chapter++;
    this.saveGame();
    this.startChapter(this.state.chapter);
  },

  _getFinalEnding: function () {
    var f = this.state.flags;
    if (f.faction_taiping) return 'You followed Princess Taiping, fighting in the vortex of power. Ultimately, you became her most trusted advisor. However, the game of power never ends...';
    if (f.faction_lidan) return 'You assisted Prince Lidan to ascend the throne. The world returned to the Tang dynasty, and you achieved fame and success. But you know this is just the beginning of a new conflict.';
    if (f.faction_wushi) return 'You chose the most dangerous path, siding with the Wu clan. After the coup, your fate hangs by a thread...';
    if (f.faction_wuzetian) return 'You remained loyal to Empress Wu. When she finally abdicated, you stayed by her side until the end. "You are a true loyal subject," she remarked.';
    return 'You navigated through the chaotic world, eventually becoming known for your talent as a King\'s Advisor. But no one knows which side your heart truly belongs to.';
  },

  saveGame: function () {
    try {
      var data = JSON.parse(JSON.stringify(this.state));
      data.currentBattle = null;
      localStorage.setItem('wuzhou_save', JSON.stringify(data));
      this.notify('Game Saved');
    } catch(e) { this.notify('Failed to Save'); }
  },

  loadGame: function () {
    try {
      var raw = localStorage.getItem('wuzhou_save');
      if (!raw) { this.notify('No Save Data'); return false; }
      this.state = JSON.parse(raw);
      this.state.currentBattle = null;
      if (this.state.phase === 'battle') this.state.phase = 'freeAction';
      this.render();
      this.notify('Game Loaded');
      return true;
    } catch(e) { this.notify('Failed to Load'); return false; }
  },

  _typewrite: function (text, elId, cb) {
    if (this._typewriterTimer) clearInterval(this._typewriterTimer);
    var el = document.getElementById(elId);
    if (!el) { if (cb) cb(); return; }
    var i = 0;
    var self = this;
    el.innerHTML = '<span class="cursor"></span>';
    this._typewriterTimer = setInterval(function() {
      if (i >= text.length) {
        clearInterval(self._typewriterTimer);
        self._typewriterTimer = null;
        el.innerHTML = text;
        if (cb) cb();
        return;
      }
      el.innerHTML = text.substring(0, i+1) + '<span class="cursor"></span>';
      i++;
    }, 45);
  },

  _shuffleArray: function (arr) {
    for (var i=arr.length-1;i>0;i--) {
      var j=Math.floor(Math.random()*(i+1));
      var t=arr[i]; arr[i]=arr[j]; arr[j]=t;
    }
    return arr;
  },

  _getChapterTitle: function () {
    var self = this;
    var ch = GameData.chapters.find(function(c){ return c.num === self.state.chapter; });
    return ch ? ch.title : 'Chapter '+this.state.chapter;
  },

  _officialName: function (id) {
    var o = GameData.officials.find(function(x){ return x.id === id; });
    return o ? o.name : id;
  },

  notify: function (msg) {
    var n = document.createElement('div');
    n.className = 'notif';
    n.textContent = msg;
    document.body.appendChild(n);
    setTimeout(function(){ if(n.parentNode) n.parentNode.removeChild(n); }, 2600);
  },
};

window.GameInstance = Game;
export function boot() { Game.init(); }
