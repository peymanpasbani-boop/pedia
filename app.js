
// ══ TRIP SUGGESTIONS SLIDER ══
const TRIP_SUGGESTIONS=[{id:'ts1',type:'air',tag:'محرم ۱۴۰۵',title:'نجف + کربلا — محرم',date:'۲۶ خرداد ۱۴۰۵',origin:'تهران',duration:'۵ شب',totalNights:5,paxText:'هر نفر',pricePerPerson:23000000,priceLabel:'۲۳,۰۰۰,۰۰۰',routeItems:[{city:'تهران',icon:'🏙',nights:null,type:'dep'},{city:'نجف اشرف',icon:'🕌',nights:2,hotel:'هتل امیرالمؤمنین ★★★★★',type:'city'},{city:'کربلای معلی',icon:'🕌',nights:3,hotel:'هتل عباسیه گرند ★★★★★',type:'city'},{city:'تهران',icon:'🏙',nights:null,type:'ret'}],timeline:[{icon:'✈️',cls:'dep',name:'پرواز از تهران',desc:'فرودگاه امام خمینی — پرواز مستقیم به نجف'},{icon:'🕌',cls:'city',name:'نجف اشرف',desc:'حرم امام علی (ع) — ۲ شب اقامت',badges:[{t:'nights',txt:'🌙 ۲ شب'},{t:'hotel',txt:'🏨 امیرالمؤمنین ★★★★★'}]},{icon:'🕌',cls:'city',name:'کربلای معلی',desc:'حرم امام حسین (ع) و حضرت عباس (ع) — ۳ شب اقامت',badges:[{t:'nights',txt:'🌙 ۳ شب'},{t:'hotel',txt:'🏨 عباسیه گرند ★★★★★'}]},{icon:'✈️',cls:'ret',name:'پرواز بازگشت به تهران',desc:'پرواز مستقیم از نجف — بازگشت به تهران'}],hotels:[{city:'نجف اشرف',cityIcon:'🕌',name:'هتل امیرالمؤمنین',stars:5,nights:2},{city:'کربلای معلی',cityIcon:'🕌',name:'هتل عباسیه گرند',stars:5,nights:3}],includes:['✈️ بلیط پرواز رفت و برگشت','🚗 ترانسفر از درب منزل','🏨 اقامت ۵ شب','🍽️ صبحانه + شام','👤 راهنمای مجرب'],priceBreakdown:[{label:'بلیط هوایی رفت و برگشت',val:'۸,۵۰۰,۰۰۰ ت'},{label:'اقامت ۵ شب (هتل ۵ ستاره)',val:'۱۱,۵۰۰,۰۰۰ ت'},{label:'ترانسفر و خدمات',val:'۳,۰۰۰,۰۰۰ ت'}]},{id:'ts2',type:'land',tag:'اقتصادی',title:'کربلا + نجف — زمینی',date:'۵ تیر ۱۴۰۵',origin:'قم',duration:'۶ شب',totalNights:6,paxText:'هر نفر',pricePerPerson:11500000,priceLabel:'۱۱,۵۰۰,۰۰۰',routeItems:[{city:'قم',icon:'🕌',nights:null,type:'dep'},{city:'کربلای معلی',icon:'🕌',nights:3,hotel:'هتل کربلا اینترنشنال ★★★★',type:'city'},{city:'نجف اشرف',icon:'🕌',nights:3,hotel:'هتل نجف پالاس ★★★★',type:'city'},{city:'قم',icon:'🕌',nights:null,type:'ret'}],timeline:[{icon:'🚌',cls:'dep',name:'حرکت از قم',desc:'اتوبوس VIP — مستقیم به مرز خسروی'},{icon:'🕌',cls:'city',name:'کربلای معلی',desc:'حرم امام حسین (ع) — ۳ شب اقامت',badges:[{t:'nights',txt:'🌙 ۳ شب'},{t:'hotel',txt:'🏨 کربلا اینترنشنال ★★★★'}]},{icon:'🕌',cls:'city',name:'نجف اشرف',desc:'حرم امام علی (ع) — ۳ شب اقامت',badges:[{t:'nights',txt:'🌙 ۳ شب'},{t:'hotel',txt:'🏨 نجف پالاس ★★★★'}]},{icon:'🚌',cls:'ret',name:'بازگشت به قم',desc:'اتوبوس VIP — مرز خسروی به قم'}],hotels:[{city:'کربلای معلی',cityIcon:'🕌',name:'هتل کربلا اینترنشنال',stars:4,nights:3},{city:'نجف اشرف',cityIcon:'🕌',name:'هتل نجف پالاس',stars:4,nights:3}],includes:['🚌 اتوبوس VIP رفت و برگشت','🚗 ترانسفر از درب منزل','🏨 اقامت ۶ شب','🍽️ صبحانه + شام','👤 راهنمای مجرب'],priceBreakdown:[{label:'اتوبوس VIP رفت و برگشت',val:'۲,۸۰۰,۰۰۰ ت'},{label:'اقامت ۶ شب (هتل ۴ ستاره)',val:'۶,۲۰۰,۰۰۰ ت'},{label:'ترانسفر و خدمات',val:'۲,۵۰۰,۰۰۰ ت'}]},{id:'ts3',type:'air',tag:'مشهد — هوایی',title:'نجف + کربلا + کاظمین',date:'۱۵ تیر ۱۴۰۵',origin:'مشهد',duration:'۷ شب',totalNights:7,paxText:'هر نفر',pricePerPerson:27500000,priceLabel:'۲۷,۵۰۰,۰۰۰',routeItems:[{city:'مشهد',icon:'🕌',nights:null,type:'dep'},{city:'نجف اشرف',icon:'🕌',nights:2,hotel:'هتل نجف گرند ★★★★★',type:'city'},{city:'کربلای معلی',icon:'🕌',nights:3,hotel:'هتل الحسین انترنشنال ★★★★★',type:'city'},{city:'کاظمین',icon:'🕌',nights:2,hotel:'هتل الامین الکاظمیه ★★★★★',type:'city'},{city:'مشهد',icon:'🕌',nights:null,type:'ret'}],timeline:[{icon:'✈️',cls:'dep',name:'پرواز از مشهد',desc:'فرودگاه مشهد — پرواز به نجف'},{icon:'🕌',cls:'city',name:'نجف اشرف',desc:'حرم امام علی (ع) — ۲ شب',badges:[{t:'nights',txt:'🌙 ۲ شب'},{t:'hotel',txt:'🏨 نجف گرند ★★★★★'}]},{icon:'🕌',cls:'city',name:'کربلای معلی',desc:'حرم امام حسین (ع) — ۳ شب',badges:[{t:'nights',txt:'🌙 ۳ شب'},{t:'hotel',txt:'🏨 الحسین انترنشنال ★★★★★'}]},{icon:'🕌',cls:'city',name:'کاظمین',desc:'حرم امام کاظم (ع) — ۲ شب',badges:[{t:'nights',txt:'🌙 ۲ شب'},{t:'hotel',txt:'🏨 الامین الکاظمیه ★★★★★'}]},{icon:'✈️',cls:'ret',name:'پرواز بازگشت به مشهد',desc:'پرواز از بغداد — بازگشت به مشهد'}],hotels:[{city:'نجف اشرف',cityIcon:'🕌',name:'هتل نجف گرند',stars:5,nights:2},{city:'کربلای معلی',cityIcon:'🕌',name:'هتل الحسین انترنشنال',stars:5,nights:3},{city:'کاظمین',cityIcon:'🕌',name:'هتل الامین الکاظمیه',stars:5,nights:2}],includes:['✈️ بلیط پرواز رفت و برگشت','🚗 ترانسفر از درب منزل','🏨 اقامت ۷ شب','🍽️ صبحانه + شام','👤 راهنمای مجرب','📱 سیم‌کارت عراقی'],priceBreakdown:[{label:'بلیط هوایی رفت و برگشت',val:'۱۰,۵۰۰,۰۰۰ ت'},{label:'اقامت ۷ شب (هتل ۵ ستاره)',val:'۱۳,۵۰۰,۰۰۰ ت'},{label:'ترانسفر و خدمات',val:'۳,۵۰۰,۰۰۰ ت'}]},{id:'ts4',type:'vip',tag:'VIP خانوادگی',title:'کربلا + نجف — VIP',date:'۸ مرداد ۱۴۰۵',origin:'تهران',duration:'۴ شب',totalNights:4,paxText:'هر نفر',pricePerPerson:38000000,priceLabel:'۳۸,۰۰۰,۰۰۰',routeItems:[{city:'تهران',icon:'🏙',nights:null,type:'dep'},{city:'کربلای معلی',icon:'🕌',nights:2,hotel:'هتل عباسیه گرند ★★★★★ (سوئیت)',type:'city'},{city:'نجف اشرف',icon:'🕌',nights:2,hotel:'هتل امیرالمؤمنین ★★★★★ (سوئیت)',type:'city'},{city:'تهران',icon:'🏙',nights:null,type:'ret'}],timeline:[{icon:'✈️',cls:'dep',name:'پرواز چارتر از تهران',desc:'پرواز اختصاصی — فرودگاه امام خمینی'},{icon:'🕌',cls:'city',name:'کربلای معلی',desc:'حرم امام حسین (ع) — ۲ شب در سوئیت',badges:[{t:'nights',txt:'🌙 ۲ شب'},{t:'hotel',txt:'👑 سوئیت عباسیه گرند'}]},{icon:'🕌',cls:'city',name:'نجف اشرف',desc:'حرم امام علی (ع) — ۲ شب در سوئیت',badges:[{t:'nights',txt:'🌙 ۲ شب'},{t:'hotel',txt:'👑 سوئیت امیرالمؤمنین'}]},{icon:'✈️',cls:'ret',name:'پرواز بازگشت — تهران',desc:'پرواز چارتر — بازگشت به تهران'}],hotels:[{city:'کربلای معلی',cityIcon:'🕌',name:'عباسیه گرند — سوئیت',stars:5,nights:2},{city:'نجف اشرف',cityIcon:'🕌',name:'امیرالمؤمنین — سوئیت',stars:5,nights:2}],includes:['✈️ پرواز چارتر اختصاصی','🚗 ماشین اختصاصی در عراق','👑 اقامت سوئیت ۵ ستاره','🍽️ تمام وعده‌ها','🎖️ راهنمای VIP اختصاصی','💐 استقبال ویژه'],priceBreakdown:[{label:'پرواز چارتر رفت و برگشت',val:'۱۴,۰۰۰,۰۰۰ ت'},{label:'اقامت ۴ شب سوئیت',val:'۱۸,۰۰۰,۰۰۰ ت'},{label:'ماشین اختصاصی و راهنمای VIP',val:'۶,۰۰۰,۰۰۰ ت'}]}];

window.TRIP_SUGGESTIONS = TRIP_SUGGESTIONS;
var tsSelectedTrip = null;

// ══ NEW TRIPS SLIDER ══
(function(){
  'use strict';
  var data = window.TRIP_SUGGESTIONS || [];
  var cur = 0, total = data.length;
  var autoTimer = null;
  var dragDelta = 0, isDragging = false, dragStartX = 0;
  var isTouching = false, touchStartX = 0, touchDelta = 0;

  function P(n){ return String(n).replace(/\d/g,function(d){return '\u06F0\u06F1\u06F2\u06F3\u06F4\u06F5\u06F6\u06F7\u06F8\u06F9'[d];}); }

  function countNights(trip){
    return (trip.routeItems||[]).filter(function(r){return r.type==='city';})
      .reduce(function(s,r){return s+(r.nights||0);},0);
  }

  function typeLabel(t){
    return t==='air'?'\u2708\uFE0F \u0647\u0648\u0627\u06CC\u06CC':t==='vip'?'\uD83D\uDC51 VIP':'\uD83D\uDE8C \u0632\u0645\u06CC\u0646\u06CC';
  }

  function buildCard(trip){
    var parts = trip.date.split(' ');
    var day=parts[0], month=parts[1]||'', year=parts[2]||'';
    var nights = countNights(trip);
    var card = document.createElement('div');
    card.className = 'ts-card';
    card.innerHTML =
      '<div class="ts-card-top">'+
        '<div class="ts-card-row1">'+
          '<span class="ts-card-tag">'+trip.tag+'</span>'+
          '<span class="ts-card-type-pill">'+typeLabel(trip.type)+'</span>'+
        '</div>'+
        '<div class="ts-card-date-block">'+
          '<div class="ts-card-day">'+day+'</div>'+
          '<div class="ts-card-date-meta">'+
            '<div class="ts-card-month">'+month+'</div>'+
            '<div class="ts-card-year">'+year+'</div>'+
          '</div>'+
        '</div>'+
        '<div class="ts-card-title">'+trip.title+'</div>'+
      '</div>'+
      '<div class="ts-card-bottom">'+
        '<div class="ts-card-info">'+
          '<div class="ts-card-origin"><div class="ts-card-origin-dot"></div>'+trip.origin+'</div>'+
          '<div class="ts-card-nights">\uD83C\uDF19\u00A0'+P(nights)+' \u0634\u0628</div>'+
        '</div>'+
        '<div class="ts-card-price-area">'+
          '<div class="ts-card-price-label">\u0647\u0631 \u0646\u0641\u0631 \u0627\u0632</div>'+
          '<div class="ts-card-price-val">'+trip.priceLabel+'</div>'+
          '<div class="ts-card-price-unit">\u062A\u0648\u0645\u0627\u0646</div>'+
        '</div>'+
      '</div>';
    return card;
  }

  function buildDots(){
    var row=document.getElementById('tsDotsRow');
    if(!row) return;
    row.innerHTML='';
    for(var i=0;i<total;i++){
      var d=document.createElement('div');
      d.className='ts-dot'+(i===0?' active':'');
      (function(idx){ d.onclick=function(){ stopAuto(); goTo(idx); startAuto(); }; })(i);
      row.appendChild(d);
    }
  }

  function updateDots(){
    var dots=document.querySelectorAll('#tsDotsRow .ts-dot');
    for(var i=0;i<dots.length;i++) dots[i].classList.toggle('active',i===cur);
  }

  var GAP=14;
  function getCardWidth(){
    var outer=document.getElementById('tsSliderOuter');
    return outer ? outer.offsetWidth : 0;
  }
  function getTrackOffset(){
    return -(cur * (getCardWidth() + GAP));
  }

  function applyTransform(px){
    var track=document.getElementById('tsSliderTrack');
    if(track) track.style.transform='translateX('+px+'px)';
  }

  function goTo(idx){
    cur=((idx%total)+total)%total;
    var track=document.getElementById('tsSliderTrack');
    if(track){ track.style.transition='transform .46s cubic-bezier(.4,0,.2,1)'; }
    applyTransform(getTrackOffset());
    updateDots();
  }

  window.tsSlide=function(dir){ stopAuto(); goTo(cur+dir); startAuto(); };

  function startAuto(){ stopAuto(); autoTimer=setInterval(function(){ goTo(cur+1); },3800); }
  function stopAuto(){ if(autoTimer){ clearInterval(autoTimer); autoTimer=null; } }

  function init(){
    var track=document.getElementById('tsSliderTrack');
    var outer=document.getElementById('tsSliderOuter');
    if(!track||!outer||!total) return;

    track.innerHTML='';
    /* Each card is exactly outer width — set inline */
    for(var i=0;i<total;i++){
      var card=buildCard(data[i]);
      card.style.position='absolute';
      card.style.top='0';
      /* width = 100% of outer minus gap; left accounts for gap */
      card.dataset.idx=i;
      track.appendChild(card);
    }
    /* track is position:relative, height = tallest card */
    track.style.position='relative';
    track.style.width='100%';
    track.style.overflow='visible';
    /* measure and position after paint */
    requestAnimationFrame(function(){
      var w = outer.offsetWidth;
      var maxH=0;
      track.querySelectorAll('.ts-card').forEach(function(c,i){
        c.style.width = w+'px';
        c.style.left = (i*(w+GAP))+'px';
        if(c.offsetHeight>maxH) maxH=c.offsetHeight;
      });
      track.style.height=maxH+'px';
      buildDots();
      goTo(0);
    });

    /* click */
    track.addEventListener('click',function(e){
      if(Math.abs(dragDelta)>8) return;
      openTripDetail(data[cur].id);
    });

    /* touch */
    outer.addEventListener('touchstart',function(e){
      isTouching=true; touchStartX=e.touches[0].clientX; touchDelta=0; stopAuto();
    },{passive:true});
    outer.addEventListener('touchmove',function(e){
      if(!isTouching) return;
      touchDelta=e.touches[0].clientX-touchStartX;
      var track2=document.getElementById('tsSliderTrack');
      if(track2){ track2.style.transition='none'; track2.style.transform='translateX('+(getTrackOffset()+touchDelta)+'px)'; }
    },{passive:true});
    outer.addEventListener('touchend',function(){
      if(!isTouching) return;
      isTouching=false;
      var track2=document.getElementById('tsSliderTrack');
      if(track2) track2.style.transition='';
      if(Math.abs(touchDelta)>50){ touchDelta<0?goTo(cur+1):goTo(cur-1); } else goTo(cur);
      touchDelta=0; startAuto();
    });

    /* mouse drag */
    outer.addEventListener('mousedown',function(e){
      isDragging=true; dragStartX=e.clientX; dragDelta=0; stopAuto();
      var track2=document.getElementById('tsSliderTrack');
      if(track2) track2.style.transition='none';
    });
    document.addEventListener('mousemove',function(e){
      if(!isDragging) return;
      dragDelta=e.clientX-dragStartX;
      var track2=document.getElementById('tsSliderTrack');
      if(track2) track2.style.transform='translateX('+(getTrackOffset()+dragDelta)+'px)';
    });
    document.addEventListener('mouseup',function(){
      if(!isDragging) return;
      isDragging=false;
      var track2=document.getElementById('tsSliderTrack');
      if(track2) track2.style.transition='';
      if(Math.abs(dragDelta)>50){ dragDelta<0?goTo(cur+1):goTo(cur-1); } else goTo(cur);
      setTimeout(function(){ dragDelta=0; },50);
      startAuto();
    });

    startAuto();
  }

  if(document.readyState==='loading'){
    document.addEventListener('DOMContentLoaded',init);
  } else { setTimeout(init,80); }
})();
function openTripDetail(id){
  tsSelectedTrip=TRIP_SUGGESTIONS.find(t=>t.id===id);
  if(!tsSelectedTrip)return;
  // Open the new direct booking sheet instead of the old detail sheet
  openStbSheet(tsSelectedTrip);
}
function closeTripDetail(e){if(e&&e.target!==document.getElementById('tripDetailOverlay'))return;closeTripDetailDirect();}
function closeTripDetailDirect(){document.body.classList.remove('sheet-open');document.getElementById('tripDetailOverlay').classList.remove('open');document.getElementById('tripDetailSheet').classList.remove('open');}
function bookSuggestedTrip(){
  // legacy — now handled by stbSheet
}

// ══ SUGGESTED TRIP BOOKING SHEET ══
var stbState={trip:null,step:1,paxCount:1,transferOpt:null,paxData:[]};

function openStbSheet(trip){
  stbState={trip:trip,step:1,paxCount:1,transferOpt:null,paxData:[]};
  document.getElementById('stbHeaderTitle').textContent='🕌 '+trip.title;
  document.getElementById('stbHeaderSub').textContent=trip.date+' — '+trip.origin+' — '+trip.duration;
  document.body.classList.add('sheet-open');
  document.getElementById('stbOverlay').classList.add('open');
  document.getElementById('stbSheet').classList.add('open');
  stbRender();
}
function closeStbSheet(){
  document.body.classList.remove('sheet-open');
  document.getElementById('stbOverlay').classList.remove('open');
  document.getElementById('stbSheet').classList.remove('open');
}
function stbOverlayClick(e){if(e.target===document.getElementById('stbOverlay'))closeStbSheet();}

function stbUpdateProgress(){
  const labels=['','جزئیات','مسافران','پرداخت'];
  [1,2,3].forEach(i=>{
    const dot=document.getElementById('stbDot'+i);
    const lbl=document.getElementById('stbLbl'+i);
    if(dot){
      if(i<stbState.step){dot.className='stb-dot done';dot.textContent='✓';}
      else if(i===stbState.step){dot.className='stb-dot active';dot.textContent=P(i);}
      else{dot.className='stb-dot pending';dot.textContent=P(i);}
    }
    if(lbl) lbl.className='stbl-item '+(i<stbState.step?'done':i===stbState.step?'active':'pending');
  });
  [1,2].forEach(i=>{const l=document.getElementById('stbLine'+i);if(l)l.className='stb-line'+(i<stbState.step?' done':'');});
  document.getElementById('stbBackBtn').style.display=stbState.step>1?'':'none';
  const nb=document.getElementById('stbNextBtn');
  if(stbState.step===3){
    nb.textContent='💳 پرداخت آنلاین ✦';
    nb.style.background='linear-gradient(135deg,#1a7c4f,#22a060)';
    nb.style.color='#fff';
  } else if(stbState.step===2){
    nb.textContent='تأیید و ادامه ←';
    nb.style.background='';nb.style.color='';
  } else {
    nb.textContent='ادامه ←';
    nb.style.background='';nb.style.color='';
  }
}

function stbRender(){
  stbUpdateProgress();
  const body=document.getElementById('stbBody');
  body.scrollTop=0;
  const trip=stbState.trip;
  const isAir=trip.type==='air'||trip.type==='vip';
  const isLand=trip.type==='land';
  const isMixed=trip.type==='mixed';
  const needsTransferQ=isLand;

  if(stbState.step===1){
    // Count total nights
    const totalNights=(trip.routeItems||[]).filter(r=>r.type==='city').reduce((s,r)=>s+(r.nights||0),0);
    const typeIcon=isAir?'✈️':isMixed?'✈️+🚌':'🚌';
    const typeLabel=isAir?'هوایی':isMixed?'رفت هوایی — برگشت زمینی':'زمینی';

    // Build timeline HTML
    const timelineHtml=(trip.timeline||[]).map((t,i)=>{
      const bh=(t.badges||[]).map(b=>`<span style="display:inline-flex;align-items:center;gap:4px;background:rgba(201,168,76,.15);border:1px solid rgba(201,168,76,.25);border-radius:100px;padding:3px 9px;font-size:10px;font-weight:700;color:var(--goldL);margin-top:4px;">${b.txt}</span>`).join('');
      const hasLine=i<trip.timeline.length-1;
      return `<div style="display:flex;gap:10px;padding:8px 0;${i<trip.timeline.length-1?'border-bottom:1px dashed rgba(201,168,76,.12);':''}">
        <div style="display:flex;flex-direction:column;align-items:center;flex-shrink:0;">
          <div style="width:30px;height:30px;border-radius:9px;background:${t.cls==='dep'||t.cls==='ret'?'rgba(255,255,255,.1)':'rgba(201,168,76,.18)'};display:flex;align-items:center;justify-content:center;font-size:14px;">${t.icon}</div>
          ${hasLine?'<div style="width:2px;flex:1;min-height:10px;background:rgba(201,168,76,.2);margin:4px 0;"></div>':''}
        </div>
        <div style="flex:1;padding-top:3px;">
          <div style="font-size:12px;font-weight:700;color:var(--goldL);">${t.name}</div>
          <div style="font-size:10.5px;color:rgba(255,255,255,.55);margin-top:2px;line-height:1.5;">${t.desc}</div>
          ${bh?`<div style="display:flex;flex-wrap:wrap;gap:4px;margin-top:5px;">${bh}</div>`:''}
        </div>
      </div>`;
    }).join('');

    // includes list
    const incHtml=(trip.includes||[]).map(inc=>`<div style="font-size:11.5px;color:var(--tm);padding:5px 0;border-bottom:1px solid rgba(201,168,76,.07);display:flex;gap:8px;align-items:center;">${inc}</div>`).join('');

    // transfer notice
    let transferNotice='';
    if(isAir||isMixed){
      const airportName=DIRECT_AIRPORTS[trip.origin==='تهران'?'tehran':trip.origin==='مشهد'?'mashhad':'isfahan']?.name||('فرودگاه '+trip.origin);
      transferNotice=`<div class="stb-transfer-notice"><div class="stb-transfer-icon">✈️</div><div><strong style="color:var(--goldL);">توجه — ترانسفر</strong><br/>در این سفر لطفاً در تاریخ اعزام به <strong style="color:var(--goldL);">${airportName}</strong> حضور داشته باشید. ترانسفر از فرودگاه تا مقصد توسط گروه آوان انجام می‌شود.</div></div>`;
    }
    if(isLand){
      transferNotice=`<div class="stb-transfer-notice"><div class="stb-transfer-icon">🚌</div><div><strong style="color:var(--goldL);">توجه — ترانسفر</strong><br/>در مرحله بعد از شما می‌پرسیم آیا ترانسفر تا مرز نیاز دارید یا خودتان به مرز می‌آیید.</div></div>`;
    }

    body.innerHTML=`
      <div class="stb-trip-card">
        <div class="stb-trip-tag">${trip.tag}</div>
        <div class="stb-trip-title">${trip.title}</div>
        <div class="stb-trip-meta">
          <div class="stb-trip-meta-pill">📅 ${trip.date}</div>
          <div class="stb-trip-meta-pill">📍 ${trip.origin}</div>
          <div class="stb-trip-meta-pill">${typeIcon} ${typeLabel}</div>
          <div class="stb-trip-meta-pill">🌙 ${P(totalNights)} شب</div>
        </div>
        <div class="stb-price-strip">
          <div>
            <div class="stb-price-label">هر نفر از</div>
            <div class="stb-price-val">${trip.priceLabel}</div>
            <div class="stb-price-unit">تومان</div>
          </div>
          <div style="font-size:22px;opacity:.5;">${typeIcon}</div>
        </div>
        ${transferNotice}
      </div>
      <!-- مسیر سفر -->
      <div style="background:var(--white);border:1.5px solid rgba(201,168,76,.13);border-radius:14px;overflow:hidden;margin-bottom:14px;">
        <div style="background:linear-gradient(90deg,rgba(13,59,46,.06),transparent);padding:11px 16px;border-bottom:1px solid rgba(201,168,76,.1);">
          <div style="font-size:12px;font-weight:800;color:var(--em);">🗺️ مسیر و برنامه سفر</div>
        </div>
        <div style="padding:12px 16px;background:linear-gradient(135deg,rgba(13,59,46,.95),rgba(26,94,73,.9));border-radius:0 0 12px 12px;">${timelineHtml}</div>
      </div>
      <!-- هتل‌ها -->
      <div style="background:var(--white);border:1.5px solid rgba(201,168,76,.13);border-radius:14px;overflow:hidden;margin-bottom:14px;">
        <div style="background:linear-gradient(90deg,rgba(13,59,46,.06),transparent);padding:11px 16px;border-bottom:1px solid rgba(201,168,76,.1);">
          <div style="font-size:12px;font-weight:800;color:var(--em);">🏨 هتل‌های اقامتی</div>
        </div>
        <div style="padding:10px 14px;display:flex;flex-direction:column;gap:7px;">
          ${(trip.hotels||[]).map(h=>{
            const sh=Array.from({length:5},(_,i)=>`<div style="width:8px;height:8px;border-radius:50%;background:${i<h.stars?'var(--gold)':'#e0d9c8'}"></div>`).join('');
            return `<div style="display:flex;align-items:center;gap:10px;background:var(--cream);border:1.5px solid rgba(201,168,76,.12);border-radius:11px;padding:9px 12px;">
              <div style="font-size:18px;flex-shrink:0;">${h.cityIcon}</div>
              <div style="flex:1;">
                <div style="font-size:12px;font-weight:700;color:var(--td);">${h.name}</div>
                <div style="font-size:10px;color:var(--ts);">${h.city}</div>
                <div style="display:flex;gap:3px;margin-top:4px;">${sh}</div>
              </div>
              <div style="font-size:11px;font-weight:700;color:var(--em);white-space:nowrap;">🌙 ${P(h.nights)} شب</div>
            </div>`;
          }).join('')}
        </div>
      </div>
      <!-- شامل سفر -->
      <div style="background:var(--white);border:1.5px solid rgba(201,168,76,.1);border-radius:12px;padding:10px 14px;margin-bottom:14px;">
        <div style="font-size:11px;font-weight:800;color:var(--em);text-transform:uppercase;letter-spacing:.05em;margin-bottom:8px;">✅ شامل سفر</div>
        ${incHtml}
      </div>
      <!-- تعداد مسافران -->
      <div class="stb-pax-row">
        <div>
          <div class="stb-pax-label">تعداد مسافران</div>
          <div style="font-size:10px;color:var(--ts);margin-top:2px;">حداکثر ۴ نفر</div>
        </div>
        <div class="stb-pax-stepper">
          <button class="stb-pax-btn" onclick="stbChgPax(-1)">−</button>
          <div class="stb-pax-val" id="stbPaxVal">${P(stbState.paxCount)}</div>
          <button class="stb-pax-btn" onclick="stbChgPax(1)">+</button>
        </div>
      </div>`;
  }

  else if(stbState.step===2){
    const trip=stbState.trip;
    const isLand2=trip.type==='land';

    // Transfer section (land only)
    let transferSection='';
    if(isLand2){
      transferSection=`
      <div class="stb-transfer-opts">
        <div class="stb-transfer-head">
          <div class="stb-transfer-title">🚗 ترانسفر تا مرز</div>
          <div class="stb-transfer-sub">آیا برای رفتن به مرز نیاز به ترانسفر دارید؟</div>
        </div>
        <div class="stb-trans-opts">
          <div class="stb-topt ${stbState.transferOpt==='door'?'sel':''}" id="stbTopt_door" onclick="stbSelTransfer('door')">
            <div class="stb-topt-radio"></div>
            <div>
              <div class="stb-topt-name">🏠 از درب منزل — ترانسفر آوان</div>
              <div class="stb-topt-sub">گروه آوان ماشین به درب منزل می‌فرستد — هزینه اضافه دارد</div>
            </div>
          </div>
          <div class="stb-topt ${stbState.transferOpt==='self'?'sel':''}" id="stbTopt_self" onclick="stbSelTransfer('self')">
            <div class="stb-topt-radio"></div>
            <div>
              <div class="stb-topt-name">🚶 خودم به مرز می‌آیم</div>
              <div class="stb-topt-sub">هزینه ترانسفر از قیمت کسر می‌شود</div>
            </div>
          </div>
        </div>
      </div>`;
    }

    // Build pax forms
    if(stbState.paxData.length!==stbState.paxCount){
      stbState.paxData=Array.from({length:stbState.paxCount},(_,i)=>stbState.paxData[i]||{first:'',last:'',phone:'',national:''});
    }
    const formsHtml=stbState.paxData.map((_,i)=>`
      <div class="stb-pax-form">
        <div class="stb-pax-form-head"><div class="stb-pax-form-num">${P(i+1)}</div>زائر ${P(i+1)}${i===0?' (سرپرست)':''}</div>
        <div class="stb-pax-form-body">
          <div class="stb-field"><label>نام *</label><input id="stbp_${i}_first" type="text" placeholder="نام" value="${stbState.paxData[i].first}" oninput="stbSavePax(${i},'first',this.value)"/></div>
          <div class="stb-field"><label>نام خانوادگی *</label><input id="stbp_${i}_last" type="text" placeholder="نام خانوادگی" value="${stbState.paxData[i].last}" oninput="stbSavePax(${i},'last',this.value)"/></div>
          ${i===0?`<div class="stb-field"><label>شماره تماس *</label><input id="stbp_${i}_phone" type="tel" placeholder="۰۹XXXXXXXXX" dir="ltr" value="${stbState.paxData[i].phone}" oninput="stbSavePax(${i},'phone',this.value)"/></div>`:''}
          <div class="stb-field"><label>کد ملی *</label><input id="stbp_${i}_national" type="text" placeholder="کد ملی" dir="ltr" value="${stbState.paxData[i].national}" oninput="stbSavePax(${i},'national',this.value)"/></div>
        </div>
      </div>`).join('');

    // Price summary
    const basePrice=trip.pricePerPerson||0;
    const transferDiscount=(isLand2&&stbState.transferOpt==='self')?800000:0;
    const transferAdd=(isLand2&&stbState.transferOpt==='door')?800000:0;
    const ppFinal=basePrice-transferDiscount+transferAdd;
    const totalFinal=ppFinal*stbState.paxCount;
    window._stbPpFinal=ppFinal;
    window._stbTotal=totalFinal;

    let priceRows=`<div class="stb-ps-row"><span class="stb-ps-row-label">قیمت هر نفر</span><span class="stb-ps-row-val">${fmt(basePrice)} ت</span></div>`;
    if(transferDiscount>0) priceRows+=`<div class="stb-ps-row"><span class="stb-ps-row-label">🚶 کسر ترانسفر</span><span class="stb-ps-row-val" style="color:#4ade80;">− ${fmt(transferDiscount)} ت</span></div>`;
    if(transferAdd>0) priceRows+=`<div class="stb-ps-row"><span class="stb-ps-row-label">🚗 افزودن ترانسفر</span><span class="stb-ps-row-val" style="color:var(--goldL);">+ ${fmt(transferAdd)} ت</span></div>`;
    if(stbState.paxCount>1) priceRows+=`<div class="stb-ps-row"><span class="stb-ps-row-label">× ${P(stbState.paxCount)} نفر</span><span class="stb-ps-row-val">${fmt(ppFinal)} × ${P(stbState.paxCount)}</span></div>`;

    body.innerHTML=`
      ${transferSection}
      <div style="font-size:11px;font-weight:700;color:var(--em);margin-bottom:10px;padding-bottom:7px;border-bottom:1px solid rgba(201,168,76,.13);">📋 اطلاعات زائرین — ${P(stbState.paxCount)} نفر</div>
      ${formsHtml}
      <div class="stb-price-summary">
        <div class="stb-ps-title">هزینه سفر</div>
        ${priceRows}
        <div class="stb-ps-total">
          <div class="stb-ps-total-label">جمع کل — ${P(stbState.paxCount)} نفر</div>
          <div class="stb-ps-total-val">${fmt(totalFinal)} ت</div>
        </div>
      </div>
      <div class="stb-alert" id="stbAlert2"></div>
      <div style="font-size:11px;color:var(--ts);line-height:1.8;background:rgba(201,168,76,.07);border-radius:9px;padding:9px 12px;border-right:3px solid var(--goldB);">📌 پس از پرداخت، کارشناسان آوان ظرف ۲ ساعت با شما تماس می‌گیرند.</div>`;
  }

  else if(stbState.step===3){
    // Final confirm step — just show code + pay button
    const code=window._stbCode||('AVN-'+Math.random().toString(36).toUpperCase().slice(2,8));
    window._stbCode=code;
    const leader=stbState.paxData[0]||{};
    const total=window._stbTotal||0;
    body.innerHTML=`
      <div style="text-align:center;padding:8px 0 16px;">
        <div style="font-size:46px;margin-bottom:8px;animation:popIn .5s cubic-bezier(.34,1.56,.64,1) both;">🕌</div>
        <div style="font-size:16px;font-weight:800;color:var(--em);margin-bottom:4px;">سفر شما ثبت شد!</div>
        <div style="font-size:12px;color:var(--ts);">اطلاعات برای کارشناسان آوان ارسال گردید</div>
      </div>
      <div style="display:flex;align-items:center;justify-content:space-between;background:rgba(201,168,76,.09);border:1.5px dashed var(--goldB);border-radius:12px;padding:9px 14px;margin-bottom:14px;">
        <span style="font-size:10px;color:var(--ts);">کد پیگیری</span>
        <span style="font-size:16px;font-weight:900;color:var(--gold);letter-spacing:.1em;direction:ltr;">${code}</span>
      </div>
      <div style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:14px;">
        <div style="display:inline-flex;align-items:center;gap:4px;padding:5px 11px;background:var(--white);border:1px solid rgba(201,168,76,.2);border-radius:100px;font-size:11px;font-weight:600;color:var(--em);">👤 ${leader.first||''} ${leader.last||''}</div>
        <div style="display:inline-flex;align-items:center;gap:4px;padding:5px 11px;background:var(--white);border:1px solid rgba(201,168,76,.2);border-radius:100px;font-size:11px;font-weight:600;color:var(--em);">🕌 ${stbState.trip.title}</div>
        <div style="display:inline-flex;align-items:center;gap:4px;padding:5px 11px;background:var(--white);border:1px solid rgba(201,168,76,.2);border-radius:100px;font-size:11px;font-weight:600;color:var(--em);">📅 ${stbState.trip.date}</div>
        <div style="display:inline-flex;align-items:center;gap:4px;padding:5px 11px;background:var(--white);border:1px solid rgba(201,168,76,.2);border-radius:100px;font-size:11px;font-weight:600;color:var(--em);">👥 ${P(stbState.paxCount)} نفر</div>
      </div>
      <div style="font-size:11.5px;color:var(--tm);background:rgba(13,59,46,.05);border-right:3px solid rgba(13,59,46,.2);border-radius:8px;padding:9px 12px;margin-bottom:14px;line-height:1.85;">
        📌 برای <strong>قطعی‌شدن رزرو</strong> لطفاً مبلغ سفر را پرداخت کنید.<br/>
        کارشناسان ما ظرف <strong>۲ ساعت</strong> با شما تماس می‌گیرند.
      </div>
      <div style="background:linear-gradient(135deg,var(--em),var(--em3));border-radius:14px;padding:14px 18px;display:flex;align-items:center;justify-content:space-between;margin-bottom:6px;">
        <div>
          <div style="font-size:10px;color:rgba(255,255,255,.5);margin-bottom:4px;">مبلغ کل سفر</div>
          <div style="font-size:24px;font-weight:900;color:var(--goldL);line-height:1;">${fmt(total)}</div>
          <div style="font-size:10px;color:rgba(255,255,255,.4);margin-top:3px;">تومان</div>
        </div>
        <div style="font-size:30px;opacity:.5;">💰</div>
      </div>
      <div id="stbPayErr" style="display:none;background:rgba(192,57,43,.07);border:1.5px solid rgba(192,57,43,.2);border-radius:10px;padding:9px 12px;font-size:11.5px;color:#c0392b;margin-bottom:10px;"></div>`;
  }
}

function stbChgPax(d){
  stbState.paxCount=Math.max(1,Math.min(4,stbState.paxCount+d));
  const el=document.getElementById('stbPaxVal');
  if(el) el.textContent=P(stbState.paxCount);
}
function stbSavePax(i,field,val){
  if(stbState.paxData[i]) stbState.paxData[i][field]=val;
}
function stbSelTransfer(opt){
  stbState.transferOpt=opt;
  ['door','self'].forEach(o=>{
    const el=document.getElementById('stbTopt_'+o);
    if(el) el.classList.toggle('sel',o===opt);
  });
  // Refresh price summary
  stbRender();
}

function stbGoNext(){
  const trip=stbState.trip;
  const isLand=trip.type==='land';

  if(stbState.step===1){
    stbState.step=2;
    stbState.paxData=Array.from({length:stbState.paxCount},(_,i)=>stbState.paxData[i]||{first:'',last:'',phone:'',national:''});
    stbRender();
    return;
  }

  if(stbState.step===2){
    // Validate transfer for land
    if(isLand&&!stbState.transferOpt){
      const a=document.getElementById('stbAlert2');
      if(a){a.textContent='لطفاً گزینه ترانسفر را انتخاب کنید.';a.classList.add('show');}
      return;
    }
    // Validate lead pax
    const p=stbState.paxData[0];
    if(!p||!p.first.trim()||!p.last.trim()||!p.phone.trim()||!p.national.trim()){
      const a=document.getElementById('stbAlert2');
      if(a){a.textContent='لطفاً اطلاعات سرپرست گروه را کامل وارد کنید.';a.classList.add('show');}
      return;
    }
    // Send to Telegram and move to step 3
    stbSendToTelegram().then(()=>{
      stbState.step=3;
      stbRender();
    });
    return;
  }

  if(stbState.step===3){
    stbDoPayment();
    return;
  }
}
function stbGoBack(){
  if(stbState.step>1){stbState.step--;stbRender();}
  else closeStbSheet();
}

async function stbSendToTelegram(){
  const BOT_TOKEN='8893591516:AAE9RAEbJnZpa23bhUaTBGI9UaESk-M2zuo';
  const CHAT_ID='8384838572';
  const trip=stbState.trip;
  const code=window._stbCode||('AVN-'+Math.random().toString(36).toUpperCase().slice(2,8));
  window._stbCode=code;
  const leader=stbState.paxData[0]||{};
  const isLand=trip.type==='land';
  const transferLabel=isLand?(stbState.transferOpt==='door'?'ترانسفر آوان از درب منزل':'خودم به مرز می‌آیم'):'پرواز — فرودگاه';
  const paxRows=stbState.paxData.map((p,i)=>`  ${P(i+1)}. ${p.first} ${p.last}${p.national?' — '+p.national:''}`).join('\n');
  const totalPrice=window._stbTotal||trip.pricePerPerson*stbState.paxCount;

  const msg=`🕌 رزرو سفر آماده — آوان
━━━━━━━━━━━━━━
🔖 کد: ${code}

🗓 سفر: ${trip.title}
📅 تاریخ: ${trip.date}
📍 مبدا: ${trip.origin}
🌙 مدت: ${trip.duration}
👥 مسافران: ${P(stbState.paxCount)} نفر

👤 سرپرست
نام: ${leader.first} ${leader.last}
موبایل: ${leader.phone}
کد ملی: ${leader.national}

🚗 ترانسفر: ${transferLabel}

👥 همه زائران
${paxRows}

💰 مبلغ کل: ${fmt(totalPrice)} تومان
━━━━━━━━━━━━━━`;

  try{
    await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,{
      method:'POST',headers:{'Content-Type':'application/json'},
      body:JSON.stringify({chat_id:CHAT_ID,text:msg})
    });
  }catch(e){console.error('Telegram stb error:',e);}
}

async function stbDoPayment(){
  const ZARINPAL_MERCHANT='XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX';
  const total=window._stbTotal||0;
  const code=window._stbCode||'—';
  const leader=stbState.paxData[0]||{};
  const callbackUrl=window.location.href.split('?')[0]+'?payment=verify&code='+code;

  // Update footer button to show loading
  const nb=document.getElementById('stbNextBtn');
  if(nb){nb.disabled=true;nb.textContent='در حال اتصال به درگاه...';}
  const errEl=document.getElementById('stbPayErr');

  const BOT_TOKEN='8893591516:AAE9RAEbJnZpa23bhUaTBGI9UaESk-M2zuo';
  const CHAT_ID='8384838572';
  try{
    await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,{
      method:'POST',headers:{'Content-Type':'application/json'},
      body:JSON.stringify({chat_id:CHAT_ID,text:`💳 شروع پرداخت سفر آماده\nکد: ${code}\nمبلغ: ${fmt(total)} تومان`})
    });
  }catch(e){}

  try{
    const resp=await fetch('https://payment.zarinpal.com/pg/v4/payment/request.json',{
      method:'POST',
      headers:{'Content-Type':'application/json','Accept':'application/json'},
      body:JSON.stringify({
        merchant_id:ZARINPAL_MERCHANT,
        amount:total,
        description:'پرداخت سفر آماده آوان — '+stbState.trip.title+' — کد: '+code,
        callback_url:callbackUrl,
        metadata:{order_id:code,mobile:leader.phone||''}
      })
    });
    const data=await resp.json();
    if(data.data&&data.data.authority){
      localStorage.setItem('zp_authority',data.data.authority);
      localStorage.setItem('zp_code',code);
      localStorage.setItem('zp_amount',total);
      window.location.href='https://payment.zarinpal.com/pg/StartPay/'+data.data.authority;
    } else {
      throw new Error(JSON.stringify(data.errors||data));
    }
  }catch(err){
    console.error('Payment error:',err);
    if(nb){nb.disabled=false;nb.textContent='💳 پرداخت آنلاین ✦';}
    if(errEl){errEl.textContent='⚠️ اتصال به درگاه پرداخت برقرار نشد. لطفاً دوباره تلاش کنید.';errEl.style.display='block';}
  }
}
// trips slider initialises itself via IIFE above

// ══ HELPERS ══
function P(n){return String(n).replace(/\d/g,d=>'۰۱۲۳۴۵۶۷۸۹'[d]);}
function fmt(n){return P(Math.round(n).toLocaleString('en'));}
const PM=['فروردین','اردیبهشت','خرداد','تیر','مرداد','شهریور','مهر','آبان','آذر','دی','بهمن','اسفند'];
const DIM=[31,31,31,31,31,31,30,30,30,30,30,29];
const TODAY={y:1405,m:3,d:16};
// Moharram is Tir 1405 (month index 4 = تیر)
const MOHARRAM_MONTH=4; // 1-indexed, تیر

function isDisabled(d,m,y){
  if(y<TODAY.y) return true;
  if(y===TODAY.y&&m<TODAY.m) return true;
  if(y===TODAY.y&&m===TODAY.m&&d<=TODAY.d+1) return true;
  return false;
}

// ══ STATE ══
const state={
  selM:null,selY:null,selD:null,dateText:null,
  passengers:0,origin:null,
  tripType:null,selectedAirport:null,
  cities:[],cityData:{},
  transferOpt:null, // null = not chosen yet
  simCard:false,dinars:false,dinarsAmt:1,
  isAgency:false,totalPrice:0
};

const DIRECT_AIRPORTS={
  tehran:{code:'IKA',name:'فرودگاه بین‌المللی امام خمینی'},
  isfahan:{code:'IFN',name:'فرودگاه اصفهان'},
  mashhad:{code:'MHD',name:'فرودگاه مشهد'}
};
const ALL_AIRPORTS=[
  {code:'IKA',name:'فرودگاه امام خمینی — تهران',city:'تهران'},
  {code:'IFN',name:'فرودگاه اصفهان',city:'اصفهان'},
  {code:'MHD',name:'فرودگاه مشهد',city:'مشهد'}
];
const AIR_CITIES=['tehran','isfahan','mashhad'];
const CITY_LABEL={tehran:'تهران',isfahan:'اصفهان',mashhad:'مشهد',shiraz:'شیراز',tabriz:'تبریز',qom:'قم',karaj:'کرج',ahvaz:'اهواز',rasht:'رشت',kermanshah:'کرمانشاه',other:'سایر'};
const CITY_META={
  karbala:{name:'کربلای معلی',shrine:'حرم امام حسین (ع)',hotelBase:3200000},
  najaf:{name:'نجف اشرف',shrine:'حرم امام علی (ع)',hotelBase:2800000},
  kadh_sam:{name:'کاظمین و سامرا',shrine:'حرم امام کاظم و عسکریین (ع)',hotelBase:2500000}
};
const HOTEL_DATA={
  karbala:[{name:'هتل عباسیه گرند',stars:5,dist:'۸۰ متر',cat:'alef',price:1.5},{name:'هتل الحسین انترنشنال',stars:5,dist:'۱۰۰ متر',cat:'alef',price:1.4},{name:'هتل کربلا رویال',stars:4,dist:'۱۵۰ متر',cat:'alef',price:1.3},{name:'هتل کربلا اینترنشنال',stars:4,dist:'۲۰۰ متر',cat:'be',price:1.0},{name:'هتل فرات',stars:3,dist:'۳۵۰ متر',cat:'be',price:0.82},{name:'هتل الروضه',stars:3,dist:'۴۵۰ متر',cat:'be',price:0.72},{name:'هتل الکوثر',stars:2,dist:'۶۰۰ متر',cat:'jim',price:0.52},{name:'هتل پیلگریم',stars:2,dist:'۸۰۰ متر',cat:'jim',price:0.42},{name:'هتل الزائرین',stars:1,dist:'۱.۲ کیلومتر',cat:'jim',price:0.32}],
  najaf:[{name:'هتل امیرالمؤمنین',stars:5,dist:'۵۰ متر',cat:'alef',price:1.5},{name:'هتل نجف گرند',stars:5,dist:'۸۰ متر',cat:'alef',price:1.4},{name:'هتل النجف رویال',stars:4,dist:'۱۲۰ متر',cat:'alef',price:1.3},{name:'هتل نجف پالاس',stars:4,dist:'۱۵۰ متر',cat:'be',price:1.0},{name:'هتل المشرق',stars:3,dist:'۳۰۰ متر',cat:'be',price:0.85},{name:'هتل الوادی',stars:3,dist:'۴۰۰ متر',cat:'be',price:0.75},{name:'هتل النخیل',stars:2,dist:'۵۵۰ متر',cat:'jim',price:0.55},{name:'هتل الاقتصادی',stars:2,dist:'۷۰۰ متر',cat:'jim',price:0.45},{name:'هتل الزائر',stars:1,dist:'۱ کیلومتر',cat:'jim',price:0.35}],
  kadh_sam:[{name:'هتل الامین الکاظمیه',stars:5,dist:'۷۰ متر',cat:'alef',price:1.4},{name:'هتل الکاظمیه پالاس',stars:4,dist:'۱۲۰ متر',cat:'alef',price:1.25},{name:'هتل العسکری پالاس',stars:5,dist:'۹۰ متر',cat:'alef',price:1.3},{name:'هتل الرشید',stars:3,dist:'۲۵۰ متر',cat:'be',price:0.9},{name:'هتل دجله سامرا',stars:3,dist:'۳۵۰ متر',cat:'be',price:0.8},{name:'هتل المرجان',stars:3,dist:'۴۰۰ متر',cat:'be',price:0.72},{name:'هتل الفرحان',stars:2,dist:'۶۵۰ متر',cat:'jim',price:0.48},{name:'هتل السلام',stars:2,dist:'۸۵۰ متر',cat:'jim',price:0.40},{name:'هتل الزائر سامرا',stars:1,dist:'۱ کیلومتر',cat:'jim',price:0.30}]
};

// ══ BOTTOM SHEET ══
let bsCurrentStep=1;
const BS_TOTAL=4;
const BS_LABELS=['','تاریخ','نوع','مقاصد','اقامت'];

function openBottomSheet(){
  buildMonthPills();
  document.getElementById('pccCityVal').textContent=CITY_LABEL[state.origin]||state.origin||'—';
  document.getElementById('pccPaxVal').textContent=P(state.passengers);
  // Lock pax section until date is chosen
  const pcc=document.getElementById('paxCityCompact');
  if(pcc){
    if(!state.selD){
      pcc.style.opacity='.45';
      pcc.style.pointerEvents='none';
    } else {
      pcc.style.opacity='1';
      pcc.style.pointerEvents='';
    }
  }
  document.body.classList.add('sheet-open');
  document.getElementById('bsOverlay').classList.add('open');
  document.getElementById('bsSheet').classList.add('open');
  _goToStep(1);
}
function closeBottomSheet(){
  document.body.classList.remove('sheet-open');
  document.getElementById('bsOverlay').classList.remove('open');
  document.getElementById('bsSheet').classList.remove('open');
}
function bsOverlayClick(e){if(e.target===document.getElementById('bsOverlay'))closeBottomSheet();}

function _goToStep(n){
  bsCurrentStep=n;
  for(let i=1;i<=BS_TOTAL;i++){
    const p=document.getElementById('bsPanel'+i);
    if(p) p.classList.toggle('active',i===n);
  }
  for(let i=1;i<=BS_TOTAL;i++){
    const dot=document.getElementById('bsDot'+i);
    const lbl=document.getElementById('bsLbl'+i);
    if(dot){
      if(i<n){dot.className='bss-dot done';dot.textContent='✓';}
      else if(i===n){dot.className='bss-dot active';dot.textContent=P(i);}
      else{dot.className='bss-dot pending';dot.textContent=P(i);}
    }
    if(lbl) lbl.className='bsl-item '+(i<n?'done':i===n?'active':'pending');
  }
  for(let i=1;i<BS_TOTAL;i++){
    const line=document.getElementById('bsLine'+i);
    if(line) line.className='bss-line'+(i<n?' done':'');
  }
  document.getElementById('bsHeaderSub').textContent='مرحله '+P(n)+' از '+P(BS_TOTAL)+' — '+BS_LABELS[n];
  document.getElementById('bsBackBtn').style.display=n>1?'':'none';
  const nextBtn=document.getElementById('bsNextBtn');
  if(n===BS_TOTAL){
    nextBtn.textContent='✦ ثبت‌نام نهایی';
    nextBtn.className='bs-next-btn';
    nextBtn.style.background='linear-gradient(135deg,var(--gold),#a8722a)';
    nextBtn.style.color='var(--em)';
  } else {
    nextBtn.textContent='ادامه ←';
    nextBtn.className='bs-next-btn';
    nextBtn.style.background='';
    nextBtn.style.color='';
  }
  const body=document.getElementById('bsBody');
  if(body) body.scrollTop=0;
  if(n===4) buildCityConfigs();
}

function bsGoNext(){
  if(bsCurrentStep===1){
    if(!state.selD){
      document.getElementById('bsAlert1').textContent='لطفاً تاریخ اعزام را انتخاب کنید.';
      document.getElementById('bsAlert1').classList.add('show');
      return;
    }
    if(!state.passengers||state.passengers<1){
      document.getElementById('bsAlert1').textContent='لطفاً تعداد مسافران را انتخاب کنید (حداقل ۱ نفر).';
      document.getElementById('bsAlert1').classList.add('show');
      enablePaxSection();
      return;
    }
    document.getElementById('bsAlert1').classList.remove('show');
    _goToStep(2);
  } else if(bsCurrentStep===2){
    if(!state.tripType){document.getElementById('bsAlert2').classList.add('show');return;}
    document.getElementById('bsAlert2').classList.remove('show');
    _goToStep(3);
  } else if(bsCurrentStep===3){
    if(state.cities.length===0){document.getElementById('bsAlert3').classList.add('show');return;}
    document.getElementById('bsAlert3').classList.remove('show');
    _goToStep(4);
  } else if(bsCurrentStep===4){
    // check transfer chosen
    if(!state.transferOpt){
      const alertEl=document.getElementById('bsAlert4');
      alertEl.textContent='لطفاً ابتدا گزینه ترانسفر را انتخاب کنید.';
      alertEl.classList.add('show');
      const sec=document.getElementById('summarySection');
      if(sec) sec.scrollIntoView({behavior:'smooth',block:'start'});
      return;
    }
    const missing=getMissingHotels();
    if(missing.length>0){
      const alertEl=document.getElementById('bsAlert4');
      alertEl.textContent='لطفاً برای همه شهرها هتل انتخاب کنید: '+missing.map(k=>CITY_META[k].name).join('، ');
      alertEl.classList.add('show');
      return;
    }
    // check lead pax
    const first=document.getElementById('pfbFirstName')?.value.trim();
    const last=document.getElementById('pfbLastName')?.value.trim();
    const phone=document.getElementById('pfbPhone')?.value.trim();
    const national=document.getElementById('pfbNational')?.value.trim();
    if(!first||!last||!phone||!national){
      const pf=document.getElementById('pf-box-el');
      if(pf) pf.scrollIntoView({behavior:'smooth',block:'start'});
      alert('لطفاً اطلاعات سرپرست گروه را کامل وارد کنید.');
      return;
    }
    finalRegister();
  }
}
function bsGoBack(){if(bsCurrentStep>1)_goToStep(bsCurrentStep-1);}

// ══ NAV MODALS ══
function openModal(id){document.getElementById('modal-'+id).classList.add('open');}
function closeModalDirect(id){document.getElementById('modal-'+id).classList.remove('open');}
function closeModal(id,e){if(e.target===document.getElementById('modal-'+id))closeModalDirect(id);}

// ══ HERO CITY ══
// ══════════════════════════════════════════════════════════════
// ══ INLINE WIZARD (IW) ══
// ══════════════════════════════════════════════════════════════
(function(){
  'use strict';

  var IW = {
    step: 1,
    selM: null, selY: null, selD: null,
    pax: 1,
    cities: [],       // ordered array of city keys
    nights: { karbala:3, najaf:2, kadh_sam:2 },
    transit: { karbala:false, najaf:false, kadh_sam:false },
    tripType: null,
    origin: null
  };
  window._IW = IW;

  var IW_PM = ['فروردین','اردیبهشت','خرداد','تیر','مرداد','شهریور',
               'مهر','آبان','آذر','دی','بهمن','اسفند'];
  var IW_DIM = [31,31,31,31,31,31,30,30,30,30,30,29];
  var IW_TODAY = {y:1405,m:3,d:16};
  var MOHARRAM_M = 4;

  function P(n){ return String(n).replace(/\d/g,function(d){return '۰۱۲۳۴۵۶۷۸۹'[d];}); }

  function iwDis(d,m,y){
    if(y<IW_TODAY.y) return true;
    if(y===IW_TODAY.y&&m<IW_TODAY.m) return true;
    if(y===IW_TODAY.y&&m===IW_TODAY.m&&d<=IW_TODAY.d+1) return true;
    return false;
  }

  // ── Build month pills ──────────────────────────────────────
  function iwBuildMonths(){
    var wrap = document.getElementById('iwMonthScroll');
    if(!wrap||wrap.children.length>0) return;
    var cy=IW_TODAY.y, cm=IW_TODAY.m;
    for(var i=0;i<6;i++){
      (function(m,y){
        var pill = document.createElement('div');
        pill.className='iw-month-pill';
        var isMoh = (m===MOHARRAM_M);
        pill.innerHTML = (isMoh?'<div class="iw-moharram-badge">🏴 محرم</div>':'')
          +'<div class="iw-month-pill-name">'+IW_PM[m-1]+'</div>'
          +'<div class="iw-month-pill-year">'+P(y)+'</div>';
        pill.onclick = function(){
          document.querySelectorAll('.iw-month-pill').forEach(function(p){p.classList.remove('sel');});
          pill.classList.add('sel');
          IW.selM=m; IW.selY=y; IW.selD=null;
          document.getElementById('iwDateChip').style.display='none';
          iwBuildDays(m,y);
          var ds=document.getElementById('iwDaySection');
          ds.style.display='block';
          ds.querySelector('.iw-day-label').textContent='🗓 روز اعزام — '+IW_PM[m-1]+' '+P(y);
          setTimeout(function(){
            // فقط اسکرول افقی — بدون page jump
            var strip=ds.querySelector('.iw-day-strip');
            if(strip) strip.scrollLeft=0;
          },150);
        };
        wrap.appendChild(pill);
      })(cm,cy);
      cm++; if(cm>12){cm=1;cy++;}
    }
  }

  function iwBuildDays(m,y){
    var strip=document.getElementById('iwDayStrip');
    strip.innerHTML='';
    var dim=IW_DIM[m-1];
    for(var d=1;d<=dim;d++){
      (function(day){
        var dis=iwDis(day,m,y);
        var el=document.createElement('div');
        el.className='iw-day-num'+(dis?' dis':'');
        el.textContent=P(day);
        if(!dis){
          el.onclick=function(){
            IW.selD=day;
            document.querySelectorAll('.iw-day-num').forEach(function(x){x.classList.remove('sel');});
            el.classList.add('sel');
            var txt=P(day)+' '+IW_PM[m-1]+' '+P(y);
            var chip=document.getElementById('iwDateChip');
            document.getElementById('iwDateChipText').textContent=txt;
            chip.style.display='inline-flex';
            // Enable pax
            var pr=document.getElementById('iwPaxRow');
            pr.style.opacity='1'; pr.style.pointerEvents='';
            pr.style.transform='scale(1.02)';
            setTimeout(function(){pr.style.transform='';},280);
            setTimeout(function(){pr.scrollIntoView({behavior:'smooth',block:'nearest'});},200);
            // scroll chip into view
            setTimeout(function(){
              chip.scrollIntoView({behavior:'smooth',block:'nearest'});
            },80);
          };
        }
        strip.appendChild(el);
      })(d);
    }
  }

  // ── Pax ───────────────────────────────────────────────────
  window.iwChangePax = function(d){
    IW.pax = Math.max(1,Math.min(4,IW.pax+d));
    document.getElementById('iwPaxVal').textContent=P(IW.pax);
  };

  // ── Cities ────────────────────────────────────────────────
  var IW_CITY_KEYS = ['karbala','najaf','kadh_sam'];
  var IW_CITY_IDS  = {karbala:'iwCityKarbala',najaf:'iwCityNajaf',kadh_sam:'iwCityKadhSam'};
  var IW_ORD_IDS   = {karbala:'iwOrdKarbala', najaf:'iwOrdNajaf', kadh_sam:'iwOrdKadhSam'};
  var IW_NV_IDS    = {karbala:'iwNvKarbala',  najaf:'iwNvNajaf',  kadh_sam:'iwNvKadhSam'};
  var IW_NIGHTS_IDS= {karbala:'iwNightsKarbala',najaf:'iwNightsNajaf',kadh_sam:'iwNightsKadhSam'};
  var IW_TRANSIT_IDS={karbala:'iwTransitKarbala',najaf:'iwTransitNajaf',kadh_sam:'iwTransitKadhSam'};
  var IW_TCH_IDS   = {karbala:'iwTchKarbala', najaf:'iwTchNajaf', kadh_sam:'iwTchKadhSam'};

  window.iwToggleCity = function(key){
    var idx=IW.cities.indexOf(key);
    if(idx>-1){
      IW.cities.splice(idx,1);
      document.getElementById(IW_CITY_IDS[key]).classList.remove('sel');
      document.getElementById(IW_NIGHTS_IDS[key]).style.display='none';
      document.getElementById(IW_TRANSIT_IDS[key]).style.display='none';
    } else {
      IW.cities.push(key);
      document.getElementById(IW_CITY_IDS[key]).classList.add('sel');
      document.getElementById(IW_NIGHTS_IDS[key]).style.display='flex';
      document.getElementById(IW_TRANSIT_IDS[key]).style.display='flex';
    }
    iwRefreshOrders();
    iwUpdateRoute();
  };

  function iwRefreshOrders(){
    IW_CITY_KEYS.forEach(function(key){
      var pos=IW.cities.indexOf(key);
      var el=document.getElementById(IW_ORD_IDS[key]);
      if(el) el.textContent=(pos>-1?P(pos+1):'');
    });
  }

  window.iwChgNights = function(e,key,d){
    e.stopPropagation();
    IW.nights[key]=Math.max(1,Math.min(14,IW.nights[key]+d));
    document.getElementById(IW_NV_IDS[key]).textContent=P(IW.nights[key]);
  };

  window.iwToggleTransit = function(e,key){
    e.stopPropagation();
    IW.transit[key]=!IW.transit[key];
    var chk=document.getElementById(IW_TCH_IDS[key]);
    chk.classList.toggle('on',IW.transit[key]);
    var nightsEl=document.getElementById(IW_NIGHTS_IDS[key]);
    if(IW.transit[key]){
      nightsEl.style.opacity='.35'; nightsEl.style.pointerEvents='none';
    } else {
      nightsEl.style.opacity='1'; nightsEl.style.pointerEvents='';
    }
  };

  var IW_CITY_NAMES={karbala:'کربلای معلی',najaf:'نجف اشرف',kadh_sam:'کاظمین و سامرا'};

  function iwUpdateRoute(){
    var el=document.getElementById('iwRoutePreview');
    if(!IW.cities.length){el.classList.remove('show');return;}
    el.classList.add('show');
    var parts=IW.cities.map(function(k){
      return '<strong>'+IW_CITY_NAMES[k]+'</strong>'+(IW.transit[k]?' (عبوری)':' — '+P(IW.nights[k])+' شب');
    });
    el.innerHTML='🗺️ مسیر: '+parts.join(' ← ');
  }

  // ── Trip type ─────────────────────────────────────────────
  window.iwSelType = function(t){
    IW.tripType=t;
    ['air','land','mixed'].forEach(function(k){
      var el=document.getElementById('iwType'+k.charAt(0).toUpperCase()+k.slice(1));
      if(el) el.classList.toggle('sel',k===t);
    });
  };

  // ── Origin ────────────────────────────────────────────────
  var IW_MORE_CITIES=[
    {city:'tabriz',name:'تبریز'},{city:'qom',name:'قم'},{city:'karaj',name:'کرج'},
    {city:'ahvaz',name:'اهواز'},{city:'rasht',name:'رشت'},{city:'kermanshah',name:'کرمانشاه'},
    {city:'arak',name:'اراک'},{city:'yazd',name:'یزد'},{city:'other',name:'سایر'}
  ];

  function iwBuildMoreCities(){
    var row=document.getElementById('iwMoreRow');
    if(!row||row.children.length>0) return;
    IW_MORE_CITIES.forEach(function(c){
      var chip=document.createElement('div');
      chip.className='iw-more-chip';
      chip.textContent=c.city==='other'?'📍 '+c.name:c.name;
      chip.onclick=function(){
        // deselect grid cards
        document.querySelectorAll('.iw-origin-card').forEach(function(x){x.classList.remove('sel');});
        document.querySelectorAll('.iw-more-chip').forEach(function(x){x.classList.remove('sel');});
        chip.classList.add('sel');
        IW.origin=c.city;
      };
      row.appendChild(chip);
    });
  }

  window.iwSelOrigin = function(el){
    document.querySelectorAll('.iw-origin-card').forEach(function(x){x.classList.remove('sel');});
    document.querySelectorAll('.iw-more-chip').forEach(function(x){x.classList.remove('sel');});
    el.classList.add('sel');
    IW.origin=el.dataset.city;
  };

  // ── Step navigation ───────────────────────────────────────
  function iwSetStep(n){
    IW.step=n;
    // Update progress bar
    document.getElementById('iwProgressBar').style.width=(n===1?'33':n===2?'66':'100')+'%';
    // Dots
    ['A','B','C'].forEach(function(l,i){
      var s=i+1;
      var dot=document.getElementById('iwDot'+l);
      var lbl=document.getElementById('iwLbl'+l);
      var line=document.getElementById('iwLine'+l);
      if(dot){
        dot.className='iw-step-dot'+(s<n?' done':s===n?' active':'');
        dot.textContent=s<n?'✓':P(s);
      }
      if(lbl) lbl.className='iw-sl'+(s<n?' done':s===n?' active':'');
      if(line&&l!=='C') line.className='iw-step-line'+(s<n?' done':'');
    });
    // Slides
    [1,2,3].forEach(function(s){
      var sl=document.getElementById('iwSlide'+s);
      if(sl) sl.classList.toggle('active',s===n);
    });
    // Scroll wrap to top
    var wrap=document.getElementById('iwWrap');
    if(wrap) setTimeout(function(){wrap.scrollIntoView({behavior:'smooth',block:'start'});},80);
  }

  window.iwNext = function(fromStep){
    if(fromStep===1){
      if(!IW.selD){
        var e=document.getElementById('iwErr1');
        e.textContent='لطفاً تاریخ اعزام را انتخاب کنید.'; e.classList.add('show');
        return;
      }
      if(IW.pax<1){
        var e2=document.getElementById('iwErr1');
        e2.textContent='لطفاً تعداد مسافران را انتخاب کنید.'; e2.classList.add('show');
        return;
      }
      document.getElementById('iwErr1').classList.remove('show');
      iwBuildMoreCities();
      iwSetStep(2);
    } else if(fromStep===2){
      if(!IW.cities.length){
        var e3=document.getElementById('iwErr2');
        e3.textContent='لطفاً حداقل یک شهر زیارتی انتخاب کنید.'; e3.classList.add('show');
        return;
      }
      document.getElementById('iwErr2').classList.remove('show');
      iwSetStep(3);
    }
  };

  window.iwBack = function(fromStep){
    if(fromStep>1) iwSetStep(fromStep-1);
  };

  // ── Finish: sync IW data → global state, open bottom sheet at step 4 ──
  window.iwFinish = function(){
    if(!IW.tripType){
      var e=document.getElementById('iwErr3');
      e.textContent='لطفاً نوع سفر را انتخاب کنید.'; e.classList.add('show');
      return;
    }
    if(!IW.origin){
      var e2=document.getElementById('iwErr3');
      e2.textContent='لطفاً شهر مبدا را انتخاب کنید.'; e2.classList.add('show');
      return;
    }
    document.getElementById('iwErr3').classList.remove('show');

    // Sync to global state
    state.selM=IW.selM; state.selY=IW.selY; state.selD=IW.selD;
    state.dateText=P(IW.selD)+' '+IW_PM[IW.selM-1]+' '+P(IW.selY);
    state.passengers=IW.pax;
    state.origin=IW.origin;
    state.tripType=IW.tripType;
    state.cities=IW.cities.slice();
    state.cityData={};
    IW.cities.forEach(function(key){
      state.cityData[key]={
        nights: IW.nights[key],
        transit: IW.transit[key],
        hotel: null,
        food: true
      };
    });
    if(IW.tripType==='air'||IW.tripType==='mixed'){
      var airMap={tehran:{code:'IKA',name:'فرودگاه بین‌المللی امام خمینی'},
                  mashhad:{code:'MHD',name:'فرودگاه مشهد'},
                  isfahan:{code:'IFN',name:'فرودگاه اصفهان'}};
      state.selectedAirport=airMap[IW.origin]||null;
    }

    // Open bottom sheet directly at step 4
    document.getElementById('pccCityVal').textContent=({tehran:'تهران',mashhad:'مشهد',isfahan:'اصفهان',shiraz:'شیراز',tabriz:'تبریز',qom:'قم',karaj:'کرج',ahvaz:'اهواز',rasht:'رشت',kermanshah:'کرمانشاه',arak:'اراک',yazd:'یزد',other:'سایر'})[IW.origin]||IW.origin;
    document.getElementById('pccPaxVal').textContent=P(state.passengers);
    document.getElementById('bsAlert1').classList.remove('show');
    document.getElementById('bsAlert2').classList.remove('show');
    document.getElementById('bsAlert3').classList.remove('show');
    document.body.classList.add('sheet-open');
    document.getElementById('bsOverlay').classList.add('open');
    document.getElementById('bsSheet').classList.add('open');
    _goToStep(4);
  };

  // ── Init on DOM ready ─────────────────────────────────────
  function iwInit(){
    iwBuildMonths();
    iwSetStep(1);
  }
  if(document.readyState==='loading'){
    document.addEventListener('DOMContentLoaded',iwInit);
  } else { setTimeout(iwInit,60); }

})();

// ══════════════════════════════════════════════════════════════

function heroSelectCity(el){
  document.querySelectorAll('.origin-card').forEach(c=>c.classList.remove('selected'));
  document.querySelectorAll('.city-pill-sm').forEach(c=>c.classList.remove('selected'));
  el.classList.add('selected');
  state.origin=el.dataset.city;
  resetFlow();
  setTimeout(()=>openBottomSheet(),120);
}
function heroSelectCityPill(el){
  document.querySelectorAll('.origin-card').forEach(c=>c.classList.remove('selected'));
  document.querySelectorAll('.city-pill-sm').forEach(c=>c.classList.remove('selected'));
  el.classList.add('selected');
  state.origin=el.dataset.city;
  resetFlow();
  setTimeout(()=>openBottomSheet(),120);
}
function resetFlow(){
  state.selM=null;state.selY=null;state.selD=null;state.dateText=null;
  state.passengers=0;
  state.tripType=null;state.selectedAirport=null;
  state.cities=[];state.cityData={};
  state.transferOpt=null;state.simCard=false;state.dinars=false;state.dinarsAmt=1;
}

// ══ MONTH PILLS — with Moharram badge on Tir ══
function buildMonthPills(){
  const wrap=document.getElementById('monthPillsWrap');
  wrap.innerHTML='';
  let cy=TODAY.y,cm=TODAY.m;
  for(let i=0;i<6;i++){
    const m=cm,y=cy;
    const isMoharram=(m===MOHARRAM_MONTH);
    const pill=document.createElement('div');
    pill.className='month-pill'+(state.selM===m&&state.selY===y?' selected':'');
    pill.style.position='relative';
    let moharramBadge='';
    if(isMoharram){
      moharramBadge=`<div class="month-pill-moharram">محرم</div>`;
    }
    pill.innerHTML=`${moharramBadge}<div class="month-pill-name">${PM[m-1]}</div><div class="month-pill-year">${P(y)}</div>`;
    pill.onclick=()=>selectMonth(m,y,pill);
    wrap.appendChild(pill);
    cm++;if(cm>12){cm=1;cy++;}
  }
}

function selectMonth(m,y,pill){
  state.selM=m;state.selY=y;state.selD=null;state.dateText=null;
  document.querySelectorAll('.month-pill').forEach(p=>p.classList.remove('selected'));
  pill.classList.add('selected');
  document.getElementById('dayDrawerLabel').textContent='📅 بکشید روز را انتخاب کنید — '+PM[m-1]+' '+P(y);
  renderDayNums(m,y);
  const drawer=document.getElementById('dayDrawer');
  drawer.classList.add('open');
  document.getElementById('dateChipWrap').style.display='none';
  // فقط اسکرول افقی نوار روزها — بدون تغییر موقعیت صفحه
  setTimeout(()=>{
    const strip=document.getElementById('dayNums');
    if(strip) strip.scrollLeft=0;
  },120);
}

function renderDayNums(m,y){
  const dim=DIM[m-1];
  const container=document.getElementById('dayNums');
  container.innerHTML='';
  for(let d=1;d<=dim;d++){
    const dis=isDisabled(d,m,y);
    const sel=(state.selD===d&&state.selM===m&&state.selY===y);
    const el=document.createElement('div');
    el.className='day-num'+(dis?' disabled':'')+(sel?' selected':'');
    el.textContent=P(d);
    if(!dis) el.onclick=()=>selDate(d,m,y);
    container.appendChild(el);
  }
  // Scroll to first available day
  setTimeout(()=>{
    const first=container.querySelector('.day-num:not(.disabled)');
    if(first) first.scrollIntoView({behavior:'smooth',block:'nearest',inline:'start'});
  },100);
}

function selDate(d,m,y){
  state.selD=d;
  state.dateText=P(d)+' '+PM[m-1]+' '+P(y);
  renderDayNums(m,y);
  document.getElementById('bsAlert1').classList.remove('show');
  document.getElementById('dateChipText').textContent=state.dateText;
  document.getElementById('dateChipWrap').style.display='block';
  // Scroll selected into view
  setTimeout(()=>{
    const sel=document.querySelector('.day-num.selected');
    if(sel) sel.scrollIntoView({behavior:'smooth',block:'nearest',inline:'center'});
  },50);
  // Enable pax section and scroll to it
  setTimeout(()=>enablePaxSection(), 300);
}

// ══ PAX ══
function changePax(d){
  state.passengers=Math.max(0,Math.min(4,state.passengers+d));
  document.getElementById('pccPaxVal').textContent=P(state.passengers);
}

function enablePaxSection(){
  const pcc=document.getElementById('paxCityCompact');
  if(pcc){
    pcc.style.opacity='1';
    pcc.style.pointerEvents='';
    // animate attention
    pcc.style.transform='scale(1.02)';
    setTimeout(()=>{ pcc.style.transform=''; },300);
    setTimeout(()=>{
      pcc.scrollIntoView({behavior:'smooth',block:'nearest'});
    },150);
  }
}

// ══ TRIP TYPE — auto-advance ══
function selectType(t){
  state.tripType=t;
  ['typeAir','typeLand','typeMixed'].forEach(id=>document.getElementById(id).classList.remove('selected'));
  const map={air:'typeAir',land:'typeLand',mixed:'typeMixed'};
  document.getElementById(map[t]).classList.add('selected');
  document.getElementById('bsAlert2').classList.remove('show');
  const awb=document.getElementById('airportWarningBox');
  if(t==='air'||t==='mixed'){
    if(AIR_CITIES.includes(state.origin)){
      state.selectedAirport=DIRECT_AIRPORTS[state.origin];
      awb.classList.remove('show');
      setTimeout(()=>_goToStep(3),500);
    } else {
      awb.classList.add('show');
      document.getElementById('awbBody').textContent='پروازها از فرودگاه‌های تهران، مشهد و اصفهان. آیا امکان حضور دارید؟';
      document.getElementById('awbStep1').style.display='block';
      document.getElementById('awbStep2').style.display='none';
    }
  } else {
    awb.classList.remove('show');
    state.selectedAirport=null;
    setTimeout(()=>_goToStep(3),500);
  }
}
function airportYes(){
  document.getElementById('awbStep1').style.display='none';
  document.getElementById('awbStep2').style.display='block';
  document.getElementById('awbBody').textContent='کدام فرودگاه را انتخاب می‌کنید؟';
  const c=document.getElementById('awbAirportList');c.innerHTML='';
  ALL_AIRPORTS.forEach(ap=>{
    const b=document.createElement('div');
    b.className='awb-airport-btn';
    b.innerHTML=`<div class="airport-icon-box">✈</div><div><div style="font-weight:700">${ap.name}</div><div style="font-size:10px;opacity:.5;margin-top:1px">${ap.city} — ${ap.code}</div></div>`;
    b.onclick=()=>{
      state.selectedAirport=ap;
      document.querySelectorAll('.awb-airport-btn').forEach(x=>x.classList.remove('selected'));
      b.classList.add('selected');
      setTimeout(()=>_goToStep(3),500);
    };
    c.appendChild(b);
  });
}
function airportNo(){
  document.getElementById('airportWarningBox').classList.remove('show');
  state.tripType=null;
  ['typeAir','typeLand','typeMixed'].forEach(id=>document.getElementById(id).classList.remove('selected'));
}

// ══ CITIES ══
function toggleCity(key){
  const idx=state.cities.indexOf(key);
  if(idx>-1){state.cities.splice(idx,1);delete state.cityData[key];getCityEl(key).classList.remove('selected');}
  else{state.cities.push(key);state.cityData[key]={nights:3,transit:false,hotel:null,food:true};getCityEl(key).classList.add('selected');}
  refreshOrders();
  updateRoutePreview();
  if(state.cities.length>0) document.getElementById('bsAlert3').classList.remove('show');
}
function getCityEl(key){return document.getElementById({karbala:'cityKarbala',najaf:'cityNajaf',kadh_sam:'cityKadhSam'}[key]);}
function refreshOrders(){
  [{key:'karbala',id:'orderKarbala'},{key:'najaf',id:'orderNajaf'},{key:'kadh_sam',id:'orderKadhSam'}].forEach(({key,id})=>{
    const pos=state.cities.indexOf(key);
    document.getElementById(id).textContent=pos>-1?P(pos+1):'';
  });
}
function updateRoutePreview(){
  const el=document.getElementById('cityRoutePreview');
  if(!state.cities.length){el.classList.remove('show');return;}
  el.classList.add('show');
  el.innerHTML='<strong>مسیر:</strong> '+state.cities.map(k=>CITY_META[k].name).join(' ← ');
}

// ══ MISSING HOTELS ══
function getMissingHotels(){
  return state.cities.filter(key=>{
    const d=state.cityData[key];
    if(!d) return true;
    if(d.transit) return false;
    return d.hotel===null||d.hotel===undefined;
  });
}

// ══ CITY CONFIGS ══
const GRADE_INFO={alef:{label:'درجه الف — لوکس',dots:5},be:{label:'درجه ب — متوسط',dots:3},jim:{label:'درجه ج — اقتصادی',dots:2}};
function dotSVG(n,t){let s='<div style="display:flex;gap:3px;align-items:center">';for(let i=1;i<=t;i++)s+=`<div style="width:9px;height:9px;border-radius:50%;background:${i<=n?'var(--gold)':'#e0d9c8'}"></div>`;return s+'</div>';}
function miniDots(n){
  var lines='';
  for(var i=1;i<=5;i++) lines+='<div style="width:6px;height:6px;border-radius:50%;background:'+(i<=n?'#c9a84c':'rgba(0,0,0,.12')+'"></div>';
  return '<div style="display:flex;gap:2px;align-items:center;">'+lines+'</div>';
}
const CITY_SVG={
  karbala:`<svg viewBox="0 0 24 24" fill="none" stroke="var(--goldL)" stroke-width="1.5" stroke-linecap="round"><line x1="12" y1="2" x2="12" y2="5"/><path d="M8 9 Q12 4 16 9"/><path d="M7 9 L7 16 L17 16 L17 9"/><rect x="10" y="12" width="4" height="4"/><line x1="5" y1="16" x2="19" y2="16"/></svg>`,
  najaf:`<svg viewBox="0 0 24 24" fill="none" stroke="var(--goldL)" stroke-width="1.5" stroke-linecap="round"><circle cx="12" cy="6" r="3.5"/><line x1="12" y1="3" x2="12" y2="1"/><path d="M8.5 9.5 Q12 7 15.5 9.5"/><rect x="9" y="10" width="6" height="8"/><rect x="11" y="13" width="2" height="5"/></svg>`,
  kadh_sam:`<svg viewBox="0 0 24 24" fill="none" stroke="var(--goldL)" stroke-width="1.5" stroke-linecap="round"><path d="M7 10 Q10 5 13 10"/><rect x="6" y="10" width="7" height="7"/><path d="M14 11 Q16.5 7 19 11"/><rect x="13.5" y="11" width="6" height="6"/></svg>`
};

function buildCityConfigs(){
  const container=document.getElementById('cityConfigs');
  container.innerHTML='';
  const alertEl=document.getElementById('bsAlert4');
  if(alertEl) alertEl.classList.remove('show');
  document.getElementById('summarySection').style.display='none';
  state.cities.forEach((key,idx)=>{
    const meta=CITY_META[key],data=state.cityData[key];
    const el=document.createElement('div');
    el.className='city-config-drawer'+(idx===0?' open':'');
    el.id='ccd_'+key;
    el.innerHTML=`
      <div class="city-config-head" onclick="toggleCityDrawer('${key}')">
        <div class="city-config-icon">${CITY_SVG[key]}</div>
        <div class="city-config-meta">
          <div class="city-config-name">${meta.name}</div>
          <div class="city-config-shrine">${meta.shrine}</div>
        </div>
        <div class="city-config-status" id="ccs_${key}">در حال تنظیم</div>
        <div class="city-config-chevron">▼</div>
      </div>
      <div class="city-config-body">
        <div class="city-config-inner">
          <div class="nights-row" id="nightsRow_${key}">
            <div><div class="nights-label-txt">تعداد شب اقامت</div></div>
            <div class="nights-stepper">
              <button class="nights-btn" onclick="chgNights('${key}',-1)">−</button>
              <div class="nights-val" id="nv_${key}">${P(data.nights)}</div>
              <div class="nights-unit">شب</div>
              <button class="nights-btn" onclick="chgNights('${key}',1)">+</button>
            </div>
          </div>
          <div class="transit-row" onclick="togTransit('${key}')">
            <div class="transit-check-box" id="tb_${key}"></div>
            <div><div class="transit-label">عبوری (بدون هتل)</div><div class="transit-desc">فقط عبور — نیازی به انتخاب هتل نیست</div></div>
          </div>
          <div id="hotelSec_${key}" class="hotel-grade-section visible">
            <div class="section-label">درجه و هتل</div>
            <div class="hotel-grade-list">
              ${['alef','be','jim'].map(g=>`
                <div class="hotel-grade-item" id="gi_${key}_${g}">
                  <div class="hotel-grade-head" onclick="togGradeItem('${key}','${g}')">
                    ${dotSVG(GRADE_INFO[g].dots,5)}
                    <div class="grade-label">${GRADE_INFO[g].label}</div>
                    <span class="grade-badge grade-badge-${g}">${g==='alef'?'الف':g==='be'?'ب':'ج'}</span>
                    <span class="grade-chevron">▼</span>
                  </div>
                  <div class="hotel-grade-body">
                    <div class="hotel-cards-inner" id="hci_${key}_${g}"></div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
          <div class="food-toggle-wrap" id="fw_${key}">
            <div><div class="food-toggle-label">وعده غذایی</div><div class="food-toggle-sub">شامل وعده‌های غذایی</div></div>
            <label class="toggle-switch"><input type="checkbox" checked onchange="setFood('${key}',this.checked)"/><div class="toggle-track"></div></label>
          </div>
        </div>
      </div>`;
    container.appendChild(el);
  });
}

function toggleCityDrawer(key){document.getElementById('ccd_'+key).classList.toggle('open');}
function chgNights(key,d){const data=state.cityData[key];data.nights=Math.max(1,Math.min(14,data.nights+d));document.getElementById('nv_'+key).textContent=P(data.nights);}
function togTransit(key){
  const d=state.cityData[key];d.transit=!d.transit;
  document.getElementById('tb_'+key).classList.toggle('checked',d.transit);
  const hs=document.getElementById('hotelSec_'+key);
  const fw=document.getElementById('fw_'+key);
  const nr=document.getElementById('nightsRow_'+key);
  const st=document.getElementById('ccs_'+key);
  if(d.transit){
    hs.classList.remove('visible');fw.style.display='none';
    nr.style.opacity='.35';nr.style.pointerEvents='none';
    st.textContent='✓ عبوری';st.className='city-config-status transit';d.hotel=null;
    // Close current and open next city automatically
    const ci=state.cities.indexOf(key);
    document.getElementById('ccd_'+key).classList.remove('open');
    if(ci<state.cities.length-1){
      const nk=state.cities[ci+1];
      const nd=document.getElementById('ccd_'+nk);
      if(nd) setTimeout(()=>{nd.classList.add('open');nd.scrollIntoView({behavior:'smooth',block:'nearest'});},300);
    }
    checkAllHotelsChosen();
  } else {
    hs.classList.add('visible');fw.style.display='';
    nr.style.opacity='';nr.style.pointerEvents='';
    if(d.hotel===null||d.hotel===undefined){st.textContent='در حال تنظیم';st.className='city-config-status';}
  }
}
function togGradeItem(key,grade){
  const gi=document.getElementById('gi_'+key+'_'+grade);
  const was=gi.classList.contains('open');
  ['alef','be','jim'].forEach(g=>{const x=document.getElementById('gi_'+key+'_'+g);if(x)x.classList.remove('open');});
  if(!was){
    gi.classList.add('open');
    const inner=document.getElementById('hci_'+key+'_'+grade);
    if(!inner.hasChildNodes()){
      HOTEL_DATA[key].filter(h=>h.cat===grade).forEach(h=>{
        const gIdx=HOTEL_DATA[key].indexOf(h);
        const card=document.createElement('div');
        card.className='hotel-card';card.id='hc_'+key+'_'+gIdx;
        card.innerHTML=`${miniDots(h.stars)}<div class="hotel-info"><div class="hotel-name">${h.name}</div><div class="hotel-dist">📍 ${h.dist}</div></div><button class="hotel-select-btn">مشاهده و انتخاب</button>`;
        card.onclick=()=>openHotelPhotoModal(key,gIdx);
        inner.appendChild(card);
      });
    }
  }
}
function selHotel(key,idx){
  state.cityData[key].hotel=idx;
  document.querySelectorAll('[id^="hc_'+key+'_"]').forEach(c=>{
    const ci=parseInt(c.id.split('_').pop());
    c.classList.toggle('selected',ci===idx);
    c.querySelector('.hotel-select-btn').textContent=ci===idx?'انتخاب شد ✓':'انتخاب';
  });
  const st=document.getElementById('ccs_'+key);
  st.textContent='✓ تنظیم شد';st.className='city-config-status done';
  document.getElementById('ccd_'+key).classList.remove('open');
  // Open next city
  const ci=state.cities.indexOf(key);
  if(ci<state.cities.length-1){
    const nk=state.cities[ci+1];
    const nd=document.getElementById('ccd_'+nk);
    if(nd) setTimeout(()=>{nd.classList.add('open');nd.scrollIntoView({behavior:'smooth',block:'nearest'});},300);
  }
  checkAllHotelsChosen();
}
function setFood(key,val){state.cityData[key].food=val;}

// ══ AUTO-SHOW SUMMARY ══
function checkAllHotelsChosen(){
  const missing=getMissingHotels();
  if(missing.length===0){
    const alertEl=document.getElementById('bsAlert4');
    if(alertEl) alertEl.classList.remove('show');
    setTimeout(()=>{
      buildSummarySection();
      const sec=document.getElementById('summarySection');
      sec.style.display='block';
      sec.scrollIntoView({behavior:'smooth',block:'start'});
    },400);
  }
}

// ══ PRICE ENGINE ══
function calcPrice(){
  let transport=state.tripType==='air'?4500000:state.tripType==='mixed'?3500000:2200000;
  if(state.transferOpt==='self') transport=Math.max(0,transport-800000);
  let accommodation=0,services=800000;
  state.cities.forEach(key=>{
    const d=state.cityData[key];
    if(d.transit) return;
    const mult=(HOTEL_DATA[key][d.hotel??0]?.price)||1.0;
    accommodation+=CITY_META[key].hotelBase*mult*d.nights;
    if(d.food) services+=500000*d.nights;
  });
  const simTotal=state.simCard?45000*state.passengers:0;
  const dinarsTotal=state.dinars?state.dinarsAmt*37000:0;
  const perPerson=transport+accommodation+services;
  const extras=simTotal+dinarsTotal;
  return{transport,accommodation,services,simTotal,dinarsTotal,extras,perPerson:Math.round(perPerson),tripTotal:Math.round(perPerson*state.passengers+extras)};
}

// ══ BUILD TRIP NARRATIVE ══
function buildNarrativeSteps(){
  const originLabel=CITY_LABEL[state.origin]||state.origin||'مبدا';
  const isAir=state.tripType==='air'||state.tripType==='mixed';
  const isLandReturn=state.tripType==='mixed'||state.tripType==='land';
  const transportIcon=isAir?'✈️':'🚌';
  const steps=[];
  // departure
  const depLabel=isAir?`از فرودگاه ${DIRECT_AIRPORTS[state.origin]?.name||originLabel} پرواز می‌کنید`:`از ${originLabel} با اتوبوس حرکت می‌کنید`;
  steps.push({icon:'🏠',cls:'origin',name:`${originLabel} — حرکت`,desc:depLabel});
  // cities
  state.cities.forEach((key,i)=>{
    const d=state.cityData[key];
    const meta=CITY_META[key];
    if(d.transit){
      steps.push({icon:'🔄',cls:'city',name:meta.name,desc:'عبور از '+meta.name+' — بدون اقامت',nights:null,transit:true});
    } else {
      const nightsStr=P(d.nights)+' شب اقامت';
      const hotelName=d.hotel!==null&&d.hotel!==undefined?HOTEL_DATA[key][d.hotel]?.name:'—';
      steps.push({icon:'🕌',cls:'city',name:meta.name,desc:`${meta.shrine} — ${hotelName}`,nights:d.nights});
    }
  });
  // return
  const retLabel=isLandReturn?`بازگشت با اتوبوس به ${originLabel}`:`پرواز بازگشت به ${originLabel}`;
  steps.push({icon:isLandReturn?'🚌':'✈️',cls:'return',name:'بازگشت به '+originLabel,desc:retLabel});
  return steps;
}

// ══ SUMMARY SECTION (step 4, auto-shown) ══
function buildSummarySection(){
  const sec=document.getElementById('summarySection');
  let totalNights=0;
  state.cities.forEach(k=>{if(!state.cityData[k].transit) totalNights+=state.cityData[k].nights;});
  const typeLabel=state.tripType==='air'?'✈️ هوایی':state.tripType==='land'?'🚌 زمینی':'✈️+🚌 ترکیبی';
  const originLabel=CITY_LABEL[state.origin]||state.origin||'مبدا';
  const p=calcPrice();
  state.totalPrice=p.tripTotal;

  // Narrative steps HTML
  const narrativeSteps=buildNarrativeSteps();
  const stepsHtml=narrativeSteps.map(s=>{
    let nightBadge=s.nights?`<div class="tnc-step-nights">🌙 ${P(s.nights)} شب</div>`:'';
    if(s.transit) nightBadge=`<div class="tnc-step-nights" style="background:rgba(100,100,100,.1);border-color:#ddd;color:#888;">عبوری</div>`;
    return `<div class="tnc-step">
      <div class="tnc-step-icon ${s.cls}">${s.icon}</div>
      <div class="tnc-step-content">
        <div class="tnc-step-name">${s.name}</div>
        <div class="tnc-step-desc">${s.desc}</div>
        ${nightBadge}
      </div>
    </div>`;
  }).join('');

  // Transfer label based on trip type
  const isAir=state.tripType==='air'||state.tripType==='mixed';
  const transferDestLabel=isAir?`تا فرودگاه ${DIRECT_AIRPORTS[state.origin]?.name||originLabel}`:`تا مرز`;
  const transferDoorLabel=isAir?`از درب منزل تا فرودگاه ${DIRECT_AIRPORTS[state.origin]?.name||originLabel}`:`از درب منزل تا مرز`;
  const transferSelfLabel=isAir?`خودم تا فرودگاه می‌آیم — ۸۰۰,۰۰۰ ت کسر می‌شود`:`خودم تا مرز می‌آیم — ۸۰۰,۰۰۰ ت کسر می‌شود`;

  sec.innerHTML=`
  <!-- Trip narrative card -->
  <div class="trip-narrative-card">
    <div class="tnc-head">
      <div class="tnc-head-icon">🗺️</div>
      <div class="tnc-head-text">
        <div class="tnc-head-title">خلاصه سفر شما</div>
        <div class="tnc-head-sub">${state.dateText} — ${P(state.passengers)} نفر — ${typeLabel}</div>
      </div>
    </div>
    <div class="tnc-meta-strip">
      <div class="tnc-meta-item">
        <div class="tnc-meta-label">مبدا</div>
        <div class="tnc-meta-val">${originLabel}</div>
        <div class="tnc-meta-sub">${typeLabel}</div>
      </div>
      <div class="tnc-meta-item">
        <div class="tnc-meta-label">مجموع اقامت</div>
        <div class="tnc-meta-val">${P(totalNights)} شب</div>
        <div class="tnc-meta-sub">${P(state.cities.length)} شهر</div>
      </div>
      <div class="tnc-meta-item">
        <div class="tnc-meta-label">زائران</div>
        <div class="tnc-meta-val">${P(state.passengers)} نفر</div>
        <div class="tnc-meta-sub">${state.dateText}</div>
      </div>
    </div>
    <div class="tnc-narrative">
      <div class="tnc-route-title">📍 مسیر سفر شما</div>
      <div class="tnc-route-steps">${stepsHtml}</div>
    </div>
  </div>

  <!-- Transfer section -->
  <div class="transfer-section">
    <div class="ts-head">
      <div class="ts-head-title">🚗 ترانسفر داخل ایران</div>
      <div class="ts-head-sub">${isAir?`پرواز از ${DIRECT_AIRPORTS[state.origin]?.name||originLabel}`:`سفر زمینی — ${transferDestLabel}`}</div>
    </div>
    <div class="ts-opts">
      <div class="topt ${state.transferOpt==='door'?'sel':''}" id="topt_door" onclick="selTransferOpt('door')">
        <div class="topt-radio"></div>
        <div class="topt-content">
          <div class="topt-name">🏠 از درب منزل</div>
          <div class="topt-sub">${transferDoorLabel}</div>
        </div>
      </div>
      <div class="topt ${state.transferOpt==='self'?'sel':''}" id="topt_self" onclick="selTransferOpt('self')">
        <div class="topt-radio"></div>
        <div class="topt-content">
          <div class="topt-name">🚶 خودم می‌آیم</div>
          <div class="topt-sub">${transferSelfLabel}</div>
        </div>
      </div>
    </div>
  </div>

  <!-- Optional services section (initially hidden) -->
  <div id="optSection" style="display:none;">
    <div class="opt-section">
      <div class="opt-sec-head"><div class="opt-sec-title">✨ خدمات اختیاری</div></div>
      <div class="opt-sec-body">
        <div class="opt-row">
          <div class="opt-icon">📱</div>
          <div class="opt-info"><div class="opt-name">سیم‌کارت عراقی</div><div class="opt-sub">${P(state.passengers)} نفر × ۴۵,۰۰۰ ت</div></div>
          <label class="toggle-switch"><input type="checkbox" id="simToggle" onchange="toggleOpt('sim',this.checked)"/><div class="toggle-track"></div></label>
        </div>
        <div class="opt-row">
          <div class="opt-icon">💵</div>
          <div class="opt-info"><div class="opt-name">ارز دینار</div><div class="opt-sub">هر ۱۰۰۰ دینار: ۳۷,۰۰۰ ت</div></div>
          <label class="toggle-switch"><input type="checkbox" id="dinarsToggle" onchange="toggleOpt('dinars',this.checked)"/><div class="toggle-track"></div></label>
        </div>
        <div class="opt-extras" id="dinarsExtras">
          <div class="opt-extras-inner">
            <div class="opt-stepper">
              <button class="opt-btn" onclick="changeDinars(-1)">−</button>
              <div class="opt-val" id="dinarsVal">${P(state.dinarsAmt)}</div>
              <button class="opt-btn" onclick="changeDinars(1)">+</button>
            </div>
            <div class="opt-note" id="dinarsNote">${P(state.dinarsAmt)} هزار دینار = ${fmt(state.dinarsAmt*37000)} ت</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Price card: per person first, then extras, then total -->
    <div class="price-card" id="priceCard">
      <div class="price-card-title">هزینه تخمینی سفر</div>
      <div class="price-per-person-row">
        <div class="price-pp-label">هزینه هر نفر (حمل‌ونقل + اقامت + خدمات)</div>
        <div class="price-pp-val" id="pricePPVal">${fmt(p.perPerson)} ت</div>
      </div>
      <div class="price-extras-list" id="priceExtrasList"></div>
      <div class="price-total-row">
        <div>
          <div class="price-total-label">جمع کل — ${P(state.passengers)} نفر</div>
          <div class="price-total-note" id="priceNote">شامل همه خدمات انتخابی</div>
        </div>
        <div class="price-total-val" id="priceTotalVal">${fmt(p.tripTotal)} ت</div>
      </div>
    </div>

    <!-- Passenger form -->
    <div class="pf-box" id="pf-box-el">
      <div class="pf-title">📋 اطلاعات زائرین</div>
      <div style="font-size:11px;font-weight:700;color:var(--em);margin-bottom:9px;padding-bottom:7px;border-bottom:1px solid rgba(201,168,76,.13);">👤 سرپرست گروه — زائر ۱</div>
      <div class="pf-grid">
        <div><label class="pf-label">نام *</label><input class="pf-input" id="pfbFirstName" type="text" placeholder="نام"/></div>
        <div><label class="pf-label">نام خانوادگی *</label><input class="pf-input" id="pfbLastName" type="text" placeholder="نام خانوادگی"/></div>
        <div><label class="pf-label">کد ملی *</label><input class="pf-input" id="pfbNational" type="text" placeholder="کد ملی" dir="ltr"/></div>
        <div><label class="pf-label">شماره تماس *</label><input class="pf-input" id="pfbPhone" type="tel" placeholder="۰۹XXXXXXXXX" dir="ltr"/></div>
        <div style="grid-column:span 2 / span 2;"><label class="pf-label">تاریخ تولد <span style="font-weight:400;color:var(--ts);">(اختیاری)</span></label><input class="pf-input" id="pfbBirth" type="text" placeholder="📅 انتخاب تاریخ تولد..." readonly onclick="openBirthDatePicker('pfbBirth')" style="cursor:pointer;"/></div>
      </div>
      <div class="pax-acc" id="passengersAccordion"></div>
      <div style="margin-top:8px;">
        <div class="agency-row" onclick="toggleAgency()">
          <div class="agency-chk" id="agencyCheckBox"></div>
          <div><div class="transit-label">آژانس همکار هستم</div></div>
        </div>
        <div class="agency-fields" id="agencyFields">
          <div class="pf-grid">
            <div><label class="pf-label">نام آژانس *</label><input class="pf-input" id="pfbAgencyName" type="text" placeholder="نام آژانس"/></div>
            <div><label class="pf-label">شماره تماس *</label><input class="pf-input" id="pfbAgencyPhone" type="tel" dir="ltr"/></div>
          </div>
        </div>
      </div>
      <div class="pf-note" style="margin-top:10px;">📌 دریافت تصویر گذرنامه یا کارت ملی ضروری است.</div>
    </div>
  </div>`;

  buildPassengerForms();
  updatePriceDisplay();
}

// Transfer selected → show optional services → then auto-scroll to price
function selTransferOpt(opt){
  state.transferOpt=opt;
  ['door','self'].forEach(o=>{const el=document.getElementById('topt_'+o);if(el)el.classList.toggle('sel',o===opt);});
  updatePriceDisplay();
  // Show optional services section
  const optSec=document.getElementById('optSection');
  if(optSec&&optSec.style.display==='none'){
    optSec.style.display='block';
    optSec.style.animation='bsFadeUp .35s ease both';
    // Auto-scroll to price after a moment
    setTimeout(()=>{
      const pc=document.getElementById('priceCard');
      if(pc) pc.scrollIntoView({behavior:'smooth',block:'start'});
      // then open passengers one by one
      setTimeout(()=>autoOpenPassengers(),700);
    },500);
  } else {
    updatePriceDisplay();
  }
  const alertEl=document.getElementById('bsAlert4');
  if(alertEl) alertEl.classList.remove('show');
}

// Auto-open passenger forms one by one
function autoOpenPassengers(){
  const acc=document.getElementById('passengersAccordion');
  if(!acc) return;
  const items=acc.querySelectorAll('.pax-item');
  if(!items.length) return;
  items.forEach((item,i)=>{
    item.classList.remove('open');
    setTimeout(()=>{
      item.classList.add('open');
      item.scrollIntoView({behavior:'smooth',block:'nearest'});
    },(i)*500);
  });
}

function toggleOpt(type,val){
  if(type==='sim'){state.simCard=val;}
  else if(type==='dinars'){
    state.dinars=val;
    const ext=document.getElementById('dinarsExtras');
    if(ext) ext.classList.toggle('open',val);
  }
  updatePriceDisplay();
}
function changeDinars(d){
  state.dinarsAmt=Math.max(1,Math.min(50,state.dinarsAmt+d));
  const v=document.getElementById('dinarsVal');if(v) v.textContent=P(state.dinarsAmt);
  const n=document.getElementById('dinarsNote');if(n) n.textContent=P(state.dinarsAmt)+' هزار دینار = '+fmt(state.dinarsAmt*37000)+' ت';
  updatePriceDisplay();
}
function updatePriceDisplay(){
  const p=calcPrice();
  state.totalPrice=p.tripTotal;
  const ppEl=document.getElementById('pricePPVal');
  if(ppEl) ppEl.textContent=fmt(p.perPerson)+' ت';
  const totalEl=document.getElementById('priceTotalVal');
  if(totalEl) totalEl.textContent=fmt(p.tripTotal)+' ت';
  // Update extras list
  const extrasList=document.getElementById('priceExtrasList');
  if(extrasList){
    let html='';
    if(p.simTotal>0) html+=`<div class="price-extra-item"><span>📱 سیم‌کارت (${P(state.passengers)} عدد)</span><span>+ ${fmt(p.simTotal)} ت</span></div>`;
    if(p.dinarsTotal>0) html+=`<div class="price-extra-item"><span>💵 ارز دینار (${P(state.dinarsAmt)} هزار)</span><span>+ ${fmt(p.dinarsTotal)} ت</span></div>`;
    if(state.transferOpt==='self') html+=`<div class="price-extra-item"><span>🚶 ترانسفر حذف شد</span><span>− ${fmt(800000)} ت / نفر</span></div>`;
    extrasList.innerHTML=html;
  }
}

function toggleAgency(){
  state.isAgency=!state.isAgency;
  document.getElementById('agencyCheckBox').classList.toggle('checked',state.isAgency);
  const af=document.getElementById('agencyFields');
  if(af) af.classList.toggle('show',state.isAgency);
}

// ══ DATE PICKER DRUM (تاریخ تولد) ══
function openBirthDatePicker(inputId, displayId){
  // اگر قبلاً باز است، نبند
  if(document.getElementById('birthPickerOverlay_'+inputId)) return;
  const years=[];for(let y=1320;y<=1390;y++) years.push(y);
  const months=['فروردین','اردیبهشت','خرداد','تیر','مرداد','شهریور','مهر','آبان','آذر','دی','بهمن','اسفند'];
  const days=[];for(let d=1;d<=31;d++) days.push(d);
  let selY=1365,selM=1,selD=1;
  // Parse existing value
  const inp=document.getElementById(inputId);
  if(inp&&inp.value){
    const parts=inp.value.split('/');
    if(parts.length===3){selY=parseInt(parts[0])||1365;selM=parseInt(parts[1])||1;selD=parseInt(parts[2])||1;}
  }

  const overlay=document.createElement('div');
  overlay.id='birthPickerOverlay_'+inputId;
  overlay.style.cssText='position:fixed;inset:0;background:rgba(0,0,0,.55);z-index:2000;display:flex;align-items:flex-end;justify-content:center;';

  overlay.innerHTML=`
  <div style="background:var(--cream);border-radius:22px 22px 0 0;width:100%;max-width:480px;padding:0 0 env(safe-area-inset-bottom);">
    <div style="display:flex;align-items:center;justify-content:center;padding:10px 0 4px;">
      <div style="width:40px;height:4px;background:rgba(0,0,0,.13);border-radius:2px;"></div>
    </div>
    <div style="background:linear-gradient(135deg,var(--em),var(--em3));padding:12px 18px;display:flex;align-items:center;justify-content:space-between;">
      <div style="font-size:14px;font-weight:800;color:var(--goldL);">📅 تاریخ تولد</div>
      <button onclick="document.getElementById('birthPickerOverlay_${inputId}').remove()" style="width:28px;height:28px;background:rgba(255,255,255,.12);border:none;border-radius:50%;cursor:pointer;color:rgba(255,255,255,.7);font-size:14px;display:flex;align-items:center;justify-content:center;">✕</button>
    </div>
    <div style="display:grid;grid-template-columns:2fr 1fr 1fr;gap:0;padding:12px 16px;">
      <div style="text-align:center;">
        <div style="font-size:10px;font-weight:700;color:var(--ts);margin-bottom:6px;">سال</div>
        <select id="bpy_${inputId}" style="width:100%;padding:10px 8px;font-family:Vazirmatn,sans-serif;font-size:16px;border:1.5px solid rgba(201,168,76,.25);border-radius:10px;background:var(--white);color:var(--em);outline:none;appearance:none;-webkit-appearance:none;text-align:center;cursor:pointer;">
          ${years.map(y=>`<option value="${y}" ${y===selY?'selected':''}>${P(y)}</option>`).join('')}
        </select>
      </div>
      <div style="text-align:center;">
        <div style="font-size:10px;font-weight:700;color:var(--ts);margin-bottom:6px;">ماه</div>
        <select id="bpm_${inputId}" style="width:100%;padding:10px 4px;font-family:Vazirmatn,sans-serif;font-size:13px;border:1.5px solid rgba(201,168,76,.25);border-radius:10px;background:var(--white);color:var(--em);outline:none;appearance:none;-webkit-appearance:none;text-align:center;cursor:pointer;">
          ${months.map((m,i)=>`<option value="${i+1}" ${(i+1)===selM?'selected':''}>${m}</option>`).join('')}
        </select>
      </div>
      <div style="text-align:center;">
        <div style="font-size:10px;font-weight:700;color:var(--ts);margin-bottom:6px;">روز</div>
        <select id="bpd_${inputId}" style="width:100%;padding:10px 4px;font-family:Vazirmatn,sans-serif;font-size:16px;border:1.5px solid rgba(201,168,76,.25);border-radius:10px;background:var(--white);color:var(--em);outline:none;appearance:none;-webkit-appearance:none;text-align:center;cursor:pointer;">
          ${days.map(d=>`<option value="${d}" ${d===selD?'selected':''}>${P(d)}</option>`).join('')}
        </select>
      </div>
    </div>
    <div style="padding:10px 16px 16px;display:flex;gap:10px;">
      <button onclick="document.getElementById('birthPickerOverlay_${inputId}').remove()" style="flex:1;padding:10px;border-radius:100px;border:1.5px solid rgba(201,168,76,.28);background:transparent;color:var(--ts);font-family:Vazirmatn,sans-serif;font-size:13px;font-weight:600;cursor:pointer;">انصراف</button>
      <button onclick="confirmBirthDate('${inputId}')" style="flex:2;padding:12px;border-radius:100px;border:none;background:linear-gradient(135deg,var(--em),var(--em3));color:var(--goldL);font-family:Vazirmatn,sans-serif;font-size:13px;font-weight:700;cursor:pointer;">✓ تأیید تاریخ تولد</button>
    </div>
  </div>`;

  overlay.addEventListener('click',function(e){if(e.target===overlay)overlay.remove();});
  document.body.appendChild(overlay);
}

function confirmBirthDate(inputId){
  const y=document.getElementById('bpy_'+inputId)?.value;
  const m=document.getElementById('bpm_'+inputId)?.value;
  const d=document.getElementById('bpd_'+inputId)?.value;
  if(!y||!m||!d) return;
  const val=P(y)+'/'+P(m).padStart(2,'0')+'/'+P(d).padStart(2,'0');
  const inp=document.getElementById(inputId);
  if(inp){ inp.value=val; inp.dispatchEvent(new Event('input')); }
  document.getElementById('birthPickerOverlay_'+inputId)?.remove();
}


function buildPassengerForms(){
  const acc=document.getElementById('passengersAccordion');
  if(!acc) return;
  acc.innerHTML='';
  for(let i=2;i<=state.passengers;i++) addPassengerItem(i);
}
function addPassengerItem(num){
  const acc=document.getElementById('passengersAccordion');
  if(!acc) return;
  const item=document.createElement('div');
  item.className='pax-item';item.id='paxItem_'+num;
  item.innerHTML=`<div class="pax-head" onclick="togPax(${num})"><div class="pax-num">${P(num)}</div><div class="pax-lbl">زائر ${P(num)}</div><div class="pax-status" id="paxSt_${num}">در انتظار</div><div class="pax-chevron">▼</div></div><div class="pax-body"><div class="pax-inner"><div class="pf-grid" style="margin-top:6px"><div><label class="pf-label">نام</label><input class="pf-input" id="p${num}_first" type="text" placeholder="نام" oninput="onPaxInput(${num})"/></div><div><label class="pf-label">نام خانوادگی</label><input class="pf-input" id="p${num}_last" type="text" placeholder="نام خانوادگی" oninput="onPaxInput(${num})"/></div><div><label class="pf-label">کد ملی</label><input class="pf-input" type="text" placeholder="کد ملی" dir="ltr"/></div><div><label class="pf-label">تاریخ تولد</label><input class="pf-input" id="p${num}_birth" type="text" placeholder="انتخاب تاریخ..." readonly onclick="openBirthDatePicker('p${num}_birth')" style="cursor:pointer;background:var(--cream);" /></div></div></div></div>`;
  acc.appendChild(item);
}
function togPax(num){const el=document.getElementById('paxItem_'+num);if(el)el.classList.toggle('open');}
function onPaxInput(num){
  const f=document.getElementById('p'+num+'_first')?.value.trim();
  const l=document.getElementById('p'+num+'_last')?.value.trim();
  if(f&&l){const st=document.getElementById('paxSt_'+num);if(st){st.textContent='✓ ثبت شد';st.style.color='var(--em3)';}}
}
async function finalRegister() {
  const BOT_TOKEN = '8893591516:AAE9RAEbJnZpa23bhUaTBGI9UaESk-M2zuo';
  const CHAT_ID   = '8384838572';

  const code = 'AVN-' + Math.random().toString(36).toUpperCase().slice(2, 8);

  // ── جمع‌آوری داده‌ها ──────────────────────────────────────
  const firstName = document.getElementById('pfbFirstName')?.value.trim() || '—';
  const lastName  = document.getElementById('pfbLastName')?.value.trim()  || '—';
  const phone     = document.getElementById('pfbPhone')?.value.trim()     || '—';
  const national  = document.getElementById('pfbNational')?.value.trim()  || '—';
  const typeLabel = state.tripType === 'air' ? '✈️ هوایی' : state.tripType === 'land' ? '🚌 زمینی' : '✈️+🚌 ترکیبی';
  const originLbl = CITY_LABEL[state.origin] || state.origin || '—';

  const cityRows = state.cities.map(k => {
    const d    = state.cityData[k];
    const meta = CITY_META[k];
    const hotel = (d.hotel !== null && d.hotel !== undefined)
      ? HOTEL_DATA[k][d.hotel]?.name : '—';
    return { name: meta.name, nights: d.nights, hotel, transit: d.transit };
  });

  // ── پیام متنی تلگرام ──────────────────────────────────────
  const cityText = cityRows.map(r =>
    `  • ${r.name}: ${P(r.nights)} شب — ${r.hotel}${r.transit ? ' (عبوری)' : ''}`
  ).join('\n');

  const textMsg =
`🕌 ثبت‌نام جدید — آوان
━━━━━━━━━━━━━━
🔖 کد: ${code}

👤 سرپرست
نام: ${firstName} ${lastName}
موبایل: ${phone}
کد ملی: ${national}

✈️ جزئیات سفر
مبدا: ${originLbl}
تاریخ: ${state.dateText}
نوع: ${typeLabel}
مسافران: ${P(state.passengers)} نفر

🕌 شهرها
${cityText}

🚗 ترانسفر: ${state.transferOpt === 'door' ? 'از درب منزل' : 'خودم می‌آیم'}
📱 سیم‌کارت: ${state.simCard ? 'بله' : 'خیر'}
💵 دینار: ${state.dinars ? P(state.dinarsAmt) + ' هزار' : 'خیر'}

💰 هزینه کل: ${fmt(state.totalPrice)} تومان
━━━━━━━━━━━━━━`;

  // ── ساخت واچر PNG با Canvas ──────────────────────────────
  async function buildVoucherBlob() {
    // بارگذاری فونت فارسی در Canvas
    await loadVazirFont();

    const W = 900, PADDING = 48;
    // محاسبه ارتفاع داینامیک
    const BASE_H = 680;
    const ROW_H  = 52;
    const extraH = cityRows.length > 1 ? (cityRows.length - 1) * ROW_H : 0;
    const H = BASE_H + extraH;

    const canvas = document.createElement('canvas');
    canvas.width  = W;
    canvas.height = H;
    const ctx = canvas.getContext('2d');

    // ── پس‌زمینه گرادیان تیره ────────────────────────────
    const bg = ctx.createLinearGradient(0, 0, W, H);
    bg.addColorStop(0,   '#0d3b2e');
    bg.addColorStop(0.5, '#134a3a');
    bg.addColorStop(1,   '#1a5e49');
    ctx.fillStyle = bg;
    roundRect(ctx, 0, 0, W, H, 28);
    ctx.fill();

    // ── تزئین: دایره‌های نیمه‌شفاف ────────────────────
    ctx.save();
    ctx.globalAlpha = 0.07;
    ctx.fillStyle = '#c9a84c';
    ctx.beginPath(); ctx.arc(W - 80, 80, 200, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.arc(80, H - 60, 160, 0, Math.PI * 2); ctx.fill();
    ctx.restore();

    // ── نوار بالایی طلایی ────────────────────────────
    const barGrad = ctx.createLinearGradient(0, 0, W, 0);
    barGrad.addColorStop(0,   '#c9a84c');
    barGrad.addColorStop(0.5, '#e8c97a');
    barGrad.addColorStop(1,   '#a8722a');
    ctx.fillStyle = barGrad;
    roundRect(ctx, PADDING, 44, W - PADDING * 2, 5, 3);
    ctx.fill();

    // ── لوگو / عنوان ─────────────────────────────────
    ctx.textAlign = 'right';
    ctx.direction = 'rtl';

    ctx.font = 'bold 32px Vazirmatn, Arial';
    ctx.fillStyle = '#e8c97a';
    ctx.fillText('گروه زیارتی آوان', W - PADDING, 100);

    ctx.font = '16px Vazirmatn, Arial';
    ctx.fillStyle = 'rgba(232,201,122,0.55)';
    ctx.fillText('مرجع تخصصی سفرهای زیارتی انفرادی', W - PADDING, 124);

    // ── تیتر VOUCHER ────────────────────────────────
    ctx.textAlign = 'center';
    ctx.font = 'bold 22px Vazirmatn, Arial';
    ctx.fillStyle = '#c9a84c';
    ctx.fillText('— واچر درخواست سفر —', W / 2, 164);

    // ── خط جداکننده ─────────────────────────────────
    drawDivider(ctx, PADDING, 180, W - PADDING * 2, '#c9a84c', 0.3);

    // ── کارت اطلاعات اصلی ────────────────────────────
    let y = 200;

    // کد پیگیری — برجسته
    ctx.textAlign = 'center';
    // کادر کد
    ctx.fillStyle = 'rgba(201,168,76,0.15)';
    roundRect(ctx, W / 2 - 140, y - 4, 280, 44, 10);
    ctx.fill();
    ctx.strokeStyle = 'rgba(201,168,76,0.5)';
    ctx.lineWidth = 1.5;
    roundRect(ctx, W / 2 - 140, y - 4, 280, 44, 10);
    ctx.stroke();

    ctx.font = 'bold 20px Vazirmatn, Arial';
    ctx.fillStyle = '#e8c97a';
    ctx.fillText('کد پیگیری: ' + code, W / 2, y + 24);

    y += 70;

    // ── ردیف‌های اطلاعات ─────────────────────────────
    const info = [
      { label: 'سرپرست', value: firstName + ' ' + lastName },
      { label: 'موبایل',  value: phone },
      { label: 'مبدا',   value: originLbl },
      { label: 'تاریخ',  value: state.dateText || '—' },
      { label: 'نوع سفر', value: typeLabel.replace(/[✈️🚌]/g, '').trim() },
      { label: 'مسافران', value: P(state.passengers) + ' نفر' },
    ];

    info.forEach((row, i) => {
      const rowY = y + i * 46;
      // پس‌زمینه در تک‌در‌میان
      if (i % 2 === 0) {
        ctx.fillStyle = 'rgba(255,255,255,0.04)';
        roundRect(ctx, PADDING, rowY - 18, W - PADDING * 2, 42, 8);
        ctx.fill();
      }
      // برچسب
      ctx.textAlign = 'right';
      ctx.font = '14px Vazirmatn, Arial';
      ctx.fillStyle = 'rgba(232,201,122,0.55)';
      ctx.fillText(row.label, W - PADDING - 12, rowY + 6);
      // مقدار
      ctx.textAlign = 'left';
      ctx.font = 'bold 16px Vazirmatn, Arial';
      ctx.fillStyle = '#ffffff';
      ctx.fillText(row.value, PADDING + 12, rowY + 6);
    });

    y += info.length * 46 + 20;

    // ── خط جداکننده ─────────────────────────────────
    drawDivider(ctx, PADDING, y, W - PADDING * 2, '#c9a84c', 0.2);
    y += 24;

    // ── عنوان مقاصد ──────────────────────────────────
    ctx.textAlign = 'right';
    ctx.font = 'bold 15px Vazirmatn, Arial';
    ctx.fillStyle = '#c9a84c';
    ctx.fillText('🕌 مقاصد زیارتی', W - PADDING, y + 4);
    y += 28;

    // ── ردیف‌های شهر ─────────────────────────────────
    cityRows.forEach((r, i) => {
      ctx.fillStyle = 'rgba(201,168,76,0.1)';
      roundRect(ctx, PADDING, y, W - PADDING * 2, 44, 8);
      ctx.fill();
      ctx.strokeStyle = 'rgba(201,168,76,0.2)';
      ctx.lineWidth = 1;
      roundRect(ctx, PADDING, y, W - PADDING * 2, 44, 8);
      ctx.stroke();

      // شماره
      ctx.textAlign = 'center';
      ctx.font = 'bold 13px Vazirmatn, Arial';
      ctx.fillStyle = '#e8c97a';
      ctx.fillText(P(i + 1), PADDING + 22, y + 26);

      // نام شهر
      ctx.textAlign = 'right';
      ctx.font = 'bold 15px Vazirmatn, Arial';
      ctx.fillStyle = '#ffffff';
      ctx.fillText(r.name, W - PADDING - 12, y + 16);

      // هتل
      ctx.font = '12px Vazirmatn, Arial';
      ctx.fillStyle = 'rgba(232,201,122,0.6)';
      const hotelTxt = r.transit ? 'عبوری' : (r.hotel + ' — ' + P(r.nights) + ' شب');
      ctx.fillText(hotelTxt, W - PADDING - 12, y + 34);

      y += ROW_H + 6;
    });

    y += 10;

    // ── خط جداکننده ─────────────────────────────────
    drawDivider(ctx, PADDING, y, W - PADDING * 2, '#c9a84c', 0.2);
    y += 24;

    // ── ترانسفر + اضافات ─────────────────────────────
    const extras = [
      ['🚗 ترانسفر', state.transferOpt === 'door' ? 'از درب منزل' : 'خودم می‌آیم'],
      ['📱 سیم‌کارت', state.simCard ? 'بله' : 'خیر'],
    ];
    if (state.dinars)
      extras.push(['💵 دینار', P(state.dinarsAmt) + ' هزار دینار']);

    extras.forEach(([lbl, val], i) => {
      ctx.textAlign = 'right';
      ctx.font = '14px Vazirmatn, Arial';
      ctx.fillStyle = 'rgba(255,255,255,0.5)';
      ctx.fillText(lbl, W - PADDING - 12, y + 6);
      ctx.textAlign = 'left';
      ctx.font = 'bold 14px Vazirmatn, Arial';
      ctx.fillStyle = '#ffffff';
      ctx.fillText(val, PADDING + 12, y + 6);
      y += 30;
    });

    y += 10;

    // ── نوار هزینه ────────────────────────────────────
    const priceGrad = ctx.createLinearGradient(PADDING, 0, W - PADDING, 0);
    priceGrad.addColorStop(0,   '#c9a84c');
    priceGrad.addColorStop(0.5, '#e8c97a');
    priceGrad.addColorStop(1,   '#a8722a');
    ctx.fillStyle = priceGrad;
    roundRect(ctx, PADDING, y, W - PADDING * 2, 62, 12);
    ctx.fill();

    ctx.textAlign = 'right';
    ctx.font = '13px Vazirmatn, Arial';
    ctx.fillStyle = '#0d3b2e';
    ctx.fillText('جمع کل — ' + P(state.passengers) + ' نفر', W - PADDING - 16, y + 22);

    ctx.textAlign = 'left';
    ctx.font = 'bold 26px Vazirmatn, Arial';
    ctx.fillStyle = '#0d3b2e';
    ctx.fillText(fmt(state.totalPrice) + ' تومان', PADDING + 16, y + 42);

    y += 80;

    // ── فوتر ──────────────────────────────────────────
    drawDivider(ctx, PADDING, y, W - PADDING * 2, '#c9a84c', 0.15);
    y += 20;

    ctx.textAlign = 'center';
    ctx.font = '13px Vazirmatn, Arial';
    ctx.fillStyle = 'rgba(232,201,122,0.4)';
    ctx.fillText('گروه زیارتی آوان  ·  ۰۹۱۰۲۱۹۸۲۶۱  ·  t.me/avanatabat', W / 2, y + 8);

    ctx.font = '11px Vazirmatn, Arial';
    ctx.fillStyle = 'rgba(255,255,255,0.18)';
    ctx.fillText('این واچر پس از تأیید کارشناس رسمیت می‌یابد', W / 2, y + 28);

    // تبدیل به Blob
    return new Promise(resolve => {
      canvas.toBlob(resolve, 'image/png', 0.95);
    });
  }

  // ── بارگذاری فونت Vazirmatn برای Canvas ──────────────────
  async function loadVazirFont() {
    try {
      if (document.fonts) {
        await document.fonts.ready;
        // اگر فونت از Google Fonts بارگذاری شده، آماده است
        const loaded = document.fonts.check('bold 16px Vazirmatn');
        if (!loaded) {
          const ff = new FontFace('Vazirmatn', 'url(https://fonts.gstatic.com/s/vazirmatn/v13/Dani32HzWNklpgRBhpFM.woff2)');
          await ff.load();
          document.fonts.add(ff);
        }
      }
    } catch (e) {
      // اگر فونت بارگذاری نشد، با Arial پیش می‌رود
      console.warn('Font load warning:', e);
    }
  }

  // ── ابزارهای ترسیم ────────────────────────────────────────
  function roundRect(ctx, x, y, w, h, r) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.lineTo(x + w - r, y);
    ctx.quadraticCurveTo(x + w, y, x + w, y + r);
    ctx.lineTo(x + w, y + h - r);
    ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
    ctx.lineTo(x + r, y + h);
    ctx.quadraticCurveTo(x, y + h, x, y + h - r);
    ctx.lineTo(x, y + r);
    ctx.quadraticCurveTo(x, y, x + r, y);
    ctx.closePath();
  }

  function drawDivider(ctx, x, y, w, color, alpha) {
    ctx.save();
    ctx.globalAlpha = alpha;
    const grad = ctx.createLinearGradient(x, 0, x + w, 0);
    grad.addColorStop(0,   'transparent');
    grad.addColorStop(0.5, color);
    grad.addColorStop(1,   'transparent');
    ctx.strokeStyle = grad;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + w, y);
    ctx.stroke();
    ctx.restore();
  }

  // ── ارسال به تلگرام ───────────────────────────────────────
  try {
    // ۱. ارسال پیام متنی
    await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: CHAT_ID, text: textMsg })
    });

    // ۲. ساخت و ارسال واچر تصویری
    const blob = await buildVoucherBlob();
    if (blob) {
      const formData = new FormData();
      formData.append('chat_id', CHAT_ID);
      formData.append('photo', blob, `voucher-${code}.png`);
      formData.append('caption', `🎫 واچر سفر — کد: ${code}\n👤 ${firstName} ${lastName}`);

      await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendPhoto`, {
        method: 'POST',
        body: formData
      });
    }
  } catch (e) {
    console.error('Telegram error:', e);
  }

  // ── نمایش مودال ثبت + پرداخت ─────────────────────────────
  window._currentRegCode = code;
  window._currentTotalPrice = state.totalPrice;

  // chips اطلاعات سفر
  const originLabel2 = CITY_LABEL[state.origin] || state.origin || '—';
  const typeLabel2 = state.tripType === 'air' ? '✈️ هوایی' : state.tripType === 'land' ? '🚌 زمینی' : '✈️+🚌 ترکیبی';
  let totalNights2 = 0;
  state.cities.forEach(k => { if (!state.cityData[k].transit) totalNights2 += state.cityData[k].nights; });
  const leaderName = ((document.getElementById('pfbFirstName')?.value.trim() || '') + ' ' + (document.getElementById('pfbLastName')?.value.trim() || '')).trim();

  const chipsData = [
    { icon: '👤', text: leaderName || '—' },
    { icon: '📍', text: originLabel2 },
    { icon: '📅', text: state.dateText || '—' },
    { icon: state.tripType === 'land' ? '🚌' : '✈️', text: typeLabel2.replace(/[✈️🚌]/g,'').trim() },
    { icon: '🌙', text: P(totalNights2) + ' شب' },
    { icon: '👥', text: P(state.passengers) + ' نفر' },
  ];

  document.getElementById('smChips').innerHTML = chipsData
    .map(c => `<div class="sm-chip"><span>${c.icon}</span>${c.text}</div>`)
    .join('');

  document.getElementById('successCode').textContent = code;

  // مبلغ کل سفر
  document.getElementById('regDepositAmt').textContent = fmt(state.totalPrice);
  window._currentDeposit = state.totalPrice;

  // ریست state دکمه‌ها
  document.getElementById('regPayBtnArea').style.display = '';
  document.getElementById('regPayProcessing').classList.remove('show');
  document.getElementById('regPaidBadge').classList.remove('show');
  const smErr = document.getElementById('smErr');
  if (smErr) { smErr.textContent = ''; smErr.classList.remove('show'); }

  closeBottomSheet();
  setTimeout(() => document.getElementById('successOverlay').classList.add('show'), 400);
}
// ══ PAYMENT ══
function closeRegModal(){
  document.getElementById('successOverlay').classList.remove('show');
  document.getElementById('regPayBtnArea').style.display = '';
  document.getElementById('regPayProcessing').classList.remove('show');
  document.getElementById('regPaidBadge').classList.remove('show');
  const smErr = document.getElementById('smErr');
  if (smErr) { smErr.textContent=''; smErr.classList.remove('show'); }
}

async function doZarinpalPayment(){
  const ZARINPAL_MERCHANT = 'XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX'; // ← کد ۲۶ رقمی خود را اینجا وارد کنید
  const amount    = window._currentDeposit || 0;
  const code      = window._currentRegCode || '—';
  const callbackUrl = window.location.href.split('?')[0] + '?payment=verify&code=' + code;
  const description = 'پرداخت سفر زیارتی آوان — کد: ' + code;

  // نمایش loading
  document.getElementById('regPayBtnArea').style.display = 'none';
  document.getElementById('regPayProcessing').classList.add('show');
  const smErr = document.getElementById('smErr');
  if (smErr) { smErr.textContent=''; smErr.classList.remove('show'); }

  // اطلاع به تلگرام
  const BOT_TOKEN = '8893591516:AAE9RAEbJnZpa23bhUaTBGI9UaESk-M2zuo';
  const CHAT_ID   = '8384838572';
  try {
    await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method:'POST', headers:{'Content-Type':'application/json'},
      body: JSON.stringify({ chat_id:CHAT_ID, text:`💳 شروع پرداخت\nکد: ${code}\nمبلغ: ${fmt(amount)} تومان` })
    });
  } catch(e){}

  // درخواست token از زرین‌پال
  try {
    const resp = await fetch('https://payment.zarinpal.com/pg/v4/payment/request.json', {
      method:'POST',
      headers:{'Content-Type':'application/json','Accept':'application/json'},
      body: JSON.stringify({
        merchant_id: ZARINPAL_MERCHANT,
        amount: amount,
        description: description,
        callback_url: callbackUrl,
        metadata: { order_id: code, mobile: document.getElementById('pfbPhone')?.value?.trim()||'' }
      })
    });
    const data = await resp.json();

    if (data.data && data.data.authority) {
      localStorage.setItem('zp_authority', data.data.authority);
      localStorage.setItem('zp_code', code);
      localStorage.setItem('zp_amount', amount);
      window.location.href = `https://payment.zarinpal.com/pg/StartPay/${data.data.authority}`;
    } else {
      throw new Error(JSON.stringify(data.errors || data));
    }
  } catch(err) {
    console.error('Payment error:', err);
    document.getElementById('regPayProcessing').classList.remove('show');
    document.getElementById('regPayBtnArea').style.display = '';
    if (smErr) {
      smErr.textContent = '⚠️ اتصال به درگاه پرداخت برقرار نشد. لطفاً دوباره تلاش کنید.';
      smErr.classList.add('show');
    }
  }
}

// بررسی بازگشت از درگاه پرداخت
(function checkZarinpalReturn(){
  const params = new URLSearchParams(window.location.search);
  if (params.get('payment') !== 'verify') return;

  const authority = params.get('Authority') || localStorage.getItem('zp_authority');
  const status    = params.get('Status');
  const code      = params.get('code') || localStorage.getItem('zp_code');
  const amount    = localStorage.getItem('zp_amount');

  if (!authority) return;

  document.getElementById('successCode').textContent = code || '—';
  document.getElementById('regDepositAmt').textContent = fmt(parseInt(amount)||0);
  document.getElementById('smChips').innerHTML = `<div class="sm-chip">📋 ${code}</div>`;

  if (status === 'OK') {
    document.getElementById('regPayBtnArea').style.display = 'none';
    document.getElementById('regPayProcessing').classList.remove('show');
    document.getElementById('regPaidBadge').classList.add('show');

    const BOT_TOKEN = '8893591516:AAE9RAEbJnZpa23bhUaTBGI9UaESk-M2zuo';
    const CHAT_ID   = '8384838572';
    fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method:'POST', headers:{'Content-Type':'application/json'},
      body: JSON.stringify({ chat_id:CHAT_ID,
        text:`✅ پرداخت موفق\nکد: ${code}\nAuthority: ${authority}\nمبلغ: ${fmt(parseInt(amount)||0)} تومان\n⚠️ تأیید نهایی از سمت سرور الزامی است.`
      })
    }).catch(()=>{});

    localStorage.removeItem('zp_authority');
    localStorage.removeItem('zp_code');
    localStorage.removeItem('zp_amount');
  } else {
    document.getElementById('regPayBtnArea').style.display = '';
    const smErr = document.getElementById('smErr');
    if (smErr) {
      smErr.textContent = '⚠️ پرداخت انجام نشد یا لغو گردید. می‌توانید دوباره تلاش کنید.';
      smErr.classList.add('show');
    }
  }

  setTimeout(()=> document.getElementById('successOverlay').classList.add('show'), 300);
  window.history.replaceState({}, '', window.location.pathname);
})();

// ══ COLLAPSIBLE ══
function toggleStepsSection(){
  document.getElementById('stepsToggle').classList.toggle('open');
  document.getElementById('stepsCollBody').classList.toggle('open');
}
function togJcard(id){
  const el=document.getElementById(id),was=el.classList.contains('open');
  document.querySelectorAll('.jcard').forEach(c=>c.classList.remove('open'));
  if(!was) el.classList.add('open');
}
function togFaq(id){
  const el=document.getElementById(id),is=el.classList.contains('open');
  document.querySelectorAll('.faq-item').forEach(f=>f.classList.remove('open'));
  if(!is) el.classList.add('open');
}

// ══ PARTNER COMPANIES TOGGLE ══
function togglePartnerInfo(id){
  var info=document.getElementById('info-'+id);
  var chevron=document.getElementById('chevron-'+id);
  var isOpen=info.classList.contains('open');

  // Close all
  ['sadra','mohebban'].forEach(function(k){
    var i=document.getElementById('info-'+k);
    var c=document.getElementById('chevron-'+k);
    if(i){ i.classList.remove('open'); setTimeout(function(){ if(i&&!i.classList.contains('open')) i.innerHTML=''; },350); }
    if(c) c.classList.remove('open');
  });

  if(!isOpen){
    var DATA={
      sadra:{
        phone:'۰۲۱۷۴۴۰۵',
        addr:'تهران، پایین‌تر از چهارراه تلفنخانه، پلاک ۲۰۸'
      },
      mohebban:{
        phone:'۰۲۱۳۳۹۷۵۶۴۰',
        addr:'تهران، خیابان جمهوری، ابتدای خیابان ملت، کوچه خوشرو، ساختمان ۱۱۰، طبقه اول'
      }
    };
    var d=DATA[id];
    info.innerHTML=d
      ? '<div class="partner-info-inner">'
        +'<div class="partner-info-row"><span>📞</span><span dir="ltr">'+d.phone+'</span></div>'
        +'<div class="partner-info-row"><span>📍</span><span>'+d.addr+'</span></div>'
        +'</div>'
      : '';
    // trigger reflow for transition
    info.offsetHeight;
    info.classList.add('open');
    chevron.classList.add('open');
  }
}
function toggleCaravanAcc(){
  const toggle=document.getElementById('caravanToggle');
  const body=document.getElementById('caravanAccBody');
  toggle.classList.toggle('open-toggle');
  body.classList.toggle('open');
  if(body.classList.contains('open')){buildCvDropdown();cvRenderList();}
}

// ══ CARAVAN ══
const CV_CITIES=[{city:'تهران',icon:'🏙',transport:'air'},{city:'مشهد',icon:'🕌',transport:'air'},{city:'اصفهان',icon:'🌉',transport:'air'},{city:'شیراز',icon:'🌸',transport:'land'},{city:'تبریز',icon:'🏔',transport:'land'},{city:'کرج',icon:'🌳',transport:'land'}];
let cvDropOpen=false;
function buildCvDropdown(){
  const scroll=document.getElementById('cvCityDdScroll');
  scroll.innerHTML='';
  CV_CITIES.forEach(({city,icon,transport})=>{
    const item=document.createElement('div');
    item.className='cv-city-dd-item'+(cvState.city===city?' active':'');
    item.innerHTML=`<div class="cv-city-dd-item-icon">${icon}</div><div class="cv-city-dd-item-name">${city}</div><div class="cv-city-dd-item-type ${transport}">${transport==='air'?'✈️ هوایی':'🚌 زمینی'}</div><div class="cv-city-dd-item-check">✓</div>`;
    item.onclick=()=>cvSelectCityFromDd(city,icon,transport);
    scroll.appendChild(item);
  });
}
function toggleCvDropdown(){
  cvDropOpen=!cvDropOpen;
  document.getElementById('cvCityDropBtn').classList.toggle('open',cvDropOpen);
  document.getElementById('cvCityDropPanel').classList.toggle('open',cvDropOpen);
  if(cvDropOpen) buildCvDropdown();
}
function cvSelectCityFromDd(city,icon,transport){
  cvDropOpen=false;
  document.getElementById('cvCityDropBtn').classList.remove('open');
  document.getElementById('cvCityDropPanel').classList.remove('open');
  document.getElementById('cvDdIcon').textContent=icon;
  document.getElementById('cvDdLabel').textContent=city;
  const badge=document.getElementById('cvDdBadge');
  badge.className='cv-city-dd-badge '+(transport==='air'?'air':'land');
  badge.textContent=transport==='air'?'✈️ هوایی':'🚌 زمینی';
  cvState.city=city;cvState.openItem=null;cvRenderList();
}
document.addEventListener('click',e=>{
  if(cvDropOpen&&!e.target.closest('.cv-city-dropdown-wrap')){
    cvDropOpen=false;
    document.getElementById('cvCityDropBtn')?.classList.remove('open');
    document.getElementById('cvCityDropPanel')?.classList.remove('open');
  }
});

const CV_DATA={
  'تهران':{3:[{id:1,day:17,type:'land',cap:14,total:40,dur:'۸ روز',route:'کربلا + نجف',price:'۸,۲۰۰,۰۰۰'},{id:2,day:19,type:'land',cap:12,total:40,dur:'۸ روز',route:'کربلا + نجف',price:'۸,۲۰۰,۰۰۰'},{id:3,day:20,type:'air',cap:8,total:30,dur:'۷ روز',route:'کربلا + نجف + کاظمین',price:'۱۴,۵۰۰,۰۰۰'},{id:4,day:22,type:'land',cap:5,total:40,dur:'۱۰ روز',route:'کربلا + نجف + سامرا',price:'۹,۸۰۰,۰۰۰'},{id:5,day:25,type:'air',cap:15,total:30,dur:'۷ روز',route:'کربلا + نجف',price:'۱۳,۸۰۰,۰۰۰'}],4:[{id:8,day:3,type:'air',cap:18,total:30,dur:'۷ روز',route:'کربلا + نجف',price:'۱۳,۸۰۰,۰۰۰'},{id:9,day:8,type:'land',cap:22,total:40,dur:'۸ روز',route:'کربلا + نجف + کاظمین',price:'۸,۹۰۰,۰۰۰'}]},
  'مشهد':{3:[{id:20,day:18,type:'air',cap:20,total:30,dur:'۷ روز',route:'کربلا + نجف',price:'۱۶,۲۰۰,۰۰۰'},{id:21,day:24,type:'air',cap:11,total:30,dur:'۷ روز',route:'کربلا + نجف + کاظمین',price:'۱۷,۵۰۰,۰۰۰'}],4:[{id:23,day:5,type:'air',cap:24,total:30,dur:'۷ روز',route:'کربلا + نجف',price:'۱۶,۲۰۰,۰۰۰'}]},
  'اصفهان':{3:[{id:30,day:20,type:'air',cap:22,total:30,dur:'۷ روز',route:'کربلا + نجف',price:'۱۵,۸۰۰,۰۰۰'}],4:[{id:32,day:10,type:'air',cap:19,total:30,dur:'۷ روز',route:'کربلا + نجف + کاظمین',price:'۱۶,۵۰۰,۰۰۰'}]},
  'شیراز':{3:[{id:40,day:21,type:'land',cap:16,total:36,dur:'۱۰ روز',route:'کربلا + نجف',price:'۹,۶۰۰,۰۰۰'}],4:[{id:42,day:15,type:'land',cap:21,total:36,dur:'۱۰ روز',route:'کربلا + نجف',price:'۹,۶۰۰,۰۰۰'}]},
  'تبریز':{3:[{id:50,day:23,type:'land',cap:13,total:38,dur:'۹ روز',route:'کربلا + نجف',price:'۸,۸۰۰,۰۰۰'}],4:[{id:51,day:7,type:'land',cap:25,total:38,dur:'۹ روز',route:'کربلا + نجف',price:'۸,۸۰۰,۰۰۰'}]},
  'کرج':{3:[{id:60,day:19,type:'land',cap:18,total:40,dur:'۸ روز',route:'کربلا + نجف',price:'۸,۰۰۰,۰۰۰'}],4:[{id:62,day:12,type:'land',cap:20,total:40,dur:'۸ روز',route:'کربلا + نجف + کاظمین',price:'۸,۹۰۰,۰۰۰'}]}
};
let cvState={city:'تهران',filterType:'all',openItem:null};
const cvMonthNums=[3,4,5];
function cvGetEvents(){
  const all=[];
  cvMonthNums.forEach(m=>{const evs=(CV_DATA[cvState.city]||{})[m]||[];evs.forEach(e=>all.push({...e,month:m}));});
  return all;
}
function cvCapCls(cap,total){const p=cap/total;return p>=.38?'hi':p>=.13?'mi':'lo';}
function cvCapLabel(cap,total){if(cap<=0)return'تکمیل ظرفیت';const p=cap/total;if(p<.13)return P(cap)+' نفر — آخرین فرصت';if(p<.38)return P(cap)+' نفر — محدود';return P(cap)+' صندلی خالی';}
function cvFilter(type){
  cvState.filterType=type;
  document.getElementById('cpAll').className='cv-pill all'+(type!=='all'?' inactive':'');
  document.getElementById('cpAir').className='cv-pill air-f'+(type!=='air'?' inactive':'');
  document.getElementById('cpLand').className='cv-pill land-f'+(type!=='land'?' inactive':'');
  cvRenderList();
}
function cvRenderList(){
  const events=cvGetEvents();
  const filtered=cvState.filterType==='all'?events:events.filter(e=>e.type===cvState.filterType);
  const sorted=[...filtered].sort((a,b)=>a.month!==b.month?a.month-b.month:a.day-b.day);
  const listEl=document.getElementById('cvList');
  const emptyEl=document.getElementById('cvEmpty');
  listEl.innerHTML='';
  if(!sorted.length){listEl.style.display='none';emptyEl.style.display='block';return;}
  listEl.style.display='';emptyEl.style.display='none';
  sorted.forEach(ev=>{
    const capCls=cvCapCls(ev.cap,ev.total);
    const capPct=Math.round((ev.cap/ev.total)*100);
    const isOpen=cvState.openItem===ev.id;
    const typeIcon=ev.type==='air'?`<svg viewBox="0 0 24 24"><path d="M5 19l5-3 3 2 5-4 4 2" stroke="currentColor" fill="none" stroke-width="1.8" stroke-linecap="round"/></svg>`:`<svg viewBox="0 0 24 24"><rect x="2" y="8" width="20" height="10" rx="3" stroke="currentColor" fill="none" stroke-width="1.8"/><rect x="6" y="10" width="3" height="4" rx="1" stroke="currentColor" fill="none" stroke-width="1.3"/><circle cx="7" cy="20" r="2" stroke="currentColor" fill="none" stroke-width="1.5"/><circle cx="17" cy="20" r="2" stroke="currentColor" fill="none" stroke-width="1.5"/></svg>`;
    const typeLabel=ev.type==='air'?'هوایی':'زمینی';
    const dateStr=P(ev.day)+' '+PM[ev.month-1];
    const item=document.createElement('div');
    item.className='cv-item'+(isOpen?' open':'');
    item.dataset.id=ev.id;
    item.innerHTML=`<div class="cv-item-head" onclick="cvToggleItem(${ev.id})"><div class="cv-type ${ev.type}">${typeIcon}${typeLabel}</div><div class="cv-date">${dateStr}</div><div style="display:flex;align-items:center;gap:6px;flex-shrink:0;"><div class="cap-bar-sm"><div class="cap-fill-sm ${capCls}" style="width:${capPct}%"></div></div><span class="cap-txt-sm ${capCls}">${ev.cap<=0?'تکمیل':P(ev.cap)+' نفر'}</span></div><div class="cv-chevron">▼</div></div><div class="cv-body"><div class="cv-booking-card"><div class="cbc-header"><div class="cbc-title">کاروان ${dateStr}</div><div class="cbc-type">${typeLabel}</div></div><div class="cbc-grid"><div class="cbc-item"><div class="cbc-label">تاریخ</div><div class="cbc-val">${dateStr}</div></div><div class="cbc-item"><div class="cbc-label">مبدا</div><div class="cbc-val">${cvState.city}</div></div><div class="cbc-item"><div class="cbc-label">مدت</div><div class="cbc-val">${ev.dur}</div></div><div class="cbc-item"><div class="cbc-label">مسیر</div><div class="cbc-val">${ev.route}</div></div><div class="cbc-item"><div class="cbc-label">وسیله</div><div class="cbc-val">${ev.type==='air'?'✈️ پرواز':'🚌 اتوبوس'}</div></div><div class="cbc-item"><div class="cbc-label">قیمت / نفر</div><div class="cbc-val price-val">${ev.price} ت</div></div></div><div class="cbc-cap-wrap"><div class="cbc-cap-label">وضعیت ظرفیت</div><div class="cbc-cap-bar"><div class="cbc-cap-fill ${capCls}" style="width:${capPct}%"></div></div><div class="cbc-cap-txt ${capCls}">${cvCapLabel(ev.cap,ev.total)}</div></div><button class="cbc-book-btn" onclick="cvBook(${ev.id},'${dateStr}','${ev.route}','${ev.price}','${typeLabel}','${ev.dur}')">✦ رزرو این کاروان</button></div></div>`;
    listEl.appendChild(item);
  });
}
function cvToggleItem(id){cvState.openItem=(cvState.openItem===id?null:id);cvRenderList();}

// ══ CARAVAN RESERVE MODAL ══
let crmState={ev:null,step:1,paxCount:1,paxData:[]};
function cvBook(id,dateStr,route,price,typeLabel,dur){
  const allEvs=cvGetEvents();
  const ev=allEvs.find(e=>e.id===id)||{id,dateStr,route,price,typeLabel,dur};
  crmState={ev,step:1,paxCount:1,paxData:[]};
  document.getElementById('crmTripStrip').innerHTML=`<div class="crm-trip-pill">✈ <span>مسیر:</span>${route}</div><div class="crm-trip-pill">📅 <span>تاریخ:</span>${dateStr}</div><div class="crm-trip-pill">💰 <span>قیمت:</span>${price} ت</div>`;
  document.getElementById('cvReserveOverlay').classList.add('show');
  crmRender();
}
function closeCvReserve(){document.getElementById('cvReserveOverlay').classList.remove('show');}
function cvReserveOverlayClick(e){if(e.target.id==='cvReserveOverlay')closeCvReserve();}
function crmUpdateProgress(){
  [1,2,3].forEach(i=>{
    const dot=document.getElementById('crmDot'+i);
    if(i<crmState.step){dot.className='crm-step-dot done';dot.textContent='✓';}
    else if(i===crmState.step){dot.className='crm-step-dot active';dot.textContent=String(i);}
    else{dot.className='crm-step-dot pending';dot.textContent=String(i);}
  });
  [1,2].forEach(i=>{const line=document.getElementById('crmLine'+i);if(line)line.className='crm-step-line'+(i<crmState.step?' done-line':'');});
  const labels=['','تعداد زائران','اطلاعات زائران','تأیید رزرو'];
  document.getElementById('crmHeadSub').textContent='مرحله '+P(crmState.step)+' از ۳ — '+labels[crmState.step];
}
function crmRender(){
  crmUpdateProgress();
  const body=document.getElementById('crmBody');
  if(crmState.step===1){
    body.innerHTML=`<div class="crm-step-title"><span class="crm-step-badge">مرحله ۱</span>تعداد زائران را انتخاب کنید</div><div class="crm-pax-stepper-row"><div class="crm-pax-stepper"><button class="crm-pax-stepper-btn" onclick="crmChgPax(-1)">−</button><div class="crm-pax-stepper-val" id="crmPaxVal">${P(crmState.paxCount)}</div><div class="crm-pax-stepper-unit">نفر</div><button class="crm-pax-stepper-btn" onclick="crmChgPax(1)">+</button></div></div><div style="font-size:11px;color:var(--ts);text-align:center;margin-bottom:4px;">برای هر نفر اطلاعات جداگانه ثبت می‌شود</div><div class="crm-nav"><button class="crm-back-btn" onclick="closeCvReserve()">انصراف</button><button class="crm-next-btn" onclick="crmStep1Next()">ادامه ←</button></div>`;
  } else if(crmState.step===2){
    if(crmState.paxData.length!==crmState.paxCount) crmState.paxData=Array.from({length:crmState.paxCount},(_,i)=>crmState.paxData[i]||{first:'',last:'',phone:'',birth:''});
    let formsHtml='';
    crmState.paxData.forEach((_,i)=>{formsHtml+=`<div class="crm-pax-form"><div class="crm-pax-form-head"><div class="crm-pax-form-num">${P(i+1)}</div>زائر ${P(i+1)}${i===0?' (سرپرست)':''}</div><div class="crm-pax-form-body"><div class="crm-field"><label>نام *</label><input id="crm_${i}_first" type="text" placeholder="نام" value="${crmState.paxData[i].first}" oninput="crmSave(${i},'first',this.value)"/></div><div class="crm-field"><label>نام خانوادگی *</label><input id="crm_${i}_last" type="text" placeholder="نام خانوادگی" value="${crmState.paxData[i].last}" oninput="crmSave(${i},'last',this.value)"/></div><div class="crm-field"><label>موبایل *</label><input id="crm_${i}_phone" type="tel" placeholder="۰۹XXXXXXXXX" dir="ltr" value="${crmState.paxData[i].phone}" oninput="crmSave(${i},'phone',this.value)"/></div><div class="crm-field"><label>تاریخ تولد</label><input id="crm_${i}_birth" type="text" placeholder="۱۳۶۵/۰۵/۲۰" value="${crmState.paxData[i].birth}" oninput="crmSave(${i},'birth',this.value)"/></div></div></div>`;});
    body.innerHTML=`<div class="crm-step-title"><span class="crm-step-badge">مرحله ۲</span>اطلاعات ${P(crmState.paxCount)} زائر را وارد کنید</div><div class="crm-pax-forms">${formsHtml}</div><div class="crm-nav"><button class="crm-back-btn" onclick="crmBack()">← بازگشت</button><button class="crm-next-btn" onclick="crmStep2Next()">تأیید ←</button></div>`;
  } else if(crmState.step===3){
    const code='KRV-'+Math.random().toString(36).toUpperCase().slice(2,8);
    const leader=crmState.paxData[0];
    body.innerHTML=`<div class="crm-success"><div class="crm-success-icon">🕌</div><div class="crm-success-title">رزرو شما ثبت شد!</div><div class="crm-success-body">سرپرست: <strong>${leader.first} ${leader.last}</strong><br/>تعداد: <strong>${P(crmState.paxCount)} نفر</strong><br/>کارشناسان ما ظرف ۲ ساعت تماس می‌گیرند.</div><div class="crm-success-code">${code}</div><div class="crm-success-note">📌 لطفاً کد پیگیری را یادداشت کنید.</div></div><div class="crm-nav" style="margin-top:16px;"><button class="crm-next-btn" onclick="closeCvReserve()">بستن</button></div>`;
  }
}
function crmChgPax(d){crmState.paxCount=Math.max(1,Math.min(20,crmState.paxCount+d));const el=document.getElementById('crmPaxVal');if(el)el.textContent=P(crmState.paxCount);}
function crmStep1Next(){crmState.step=2;crmState.paxData=Array.from({length:crmState.paxCount},(_,i)=>crmState.paxData[i]||{first:'',last:'',phone:'',birth:''});crmRender();}
function crmSave(i,field,val){if(crmState.paxData[i])crmState.paxData[i][field]=val;}
function crmStep2Next(){const leader=crmState.paxData[0];if(!leader||!leader.first.trim()||!leader.last.trim()||!leader.phone.trim()){alert('لطفاً اطلاعات سرپرست را کامل وارد کنید.');return;}crmState.step=3;crmRender();}
function crmBack(){crmState.step=Math.max(1,crmState.step-1);crmRender();}



var aiChatOpen=false;
var aiConvHistory=[];
var aiIsTyping=false;

var AI_SYSTEM_PROMPT='تو مشاور هوشمند گروه زیارتی آوان هستی — متخصص سفرهای زیارتی به عراق (کربلا، نجف، کاظمین، سامرا).\n\nوظیفه‌ات:\n۱. از توضیح کاربر، خواسته‌هایش رو استخراج کن (مدت، مبدا، نوع سفر، بودجه، تعداد نفر)\n۲. ۲ تا ۳ پیشنهاد مشخص و واقعی بده\n۳. هر پیشنهاد شامل: نام سفر، مبدا، مدت، مسیر، نوع حمل‌ونقل، درجه هتل، قیمت تخمینی هر نفر\n\nقیمت‌های تخمینی (تومان، هر نفر):\n- هوایی رفت‌وبرگشت: 4500000 تا 6000000\n- زمینی رفت‌وبرگشت: 2000000 تا 3000000\n- هتل 5 ستاره: شبی 2800000 تا 4500000\n- هتل 4 ستاره: شبی 1800000 تا 2800000\n- هتل 3 ستاره: شبی 1000000 تا 1800000\n- خدمات (ترانسفر، راهنما، غذا): 800000 تا 1500000\n\nپاسخت باید دقیقاً JSON باشه — بدون هیچ متن اضافه‌ای قبل یا بعد:\n{\n  \"intro\": \"متن کوتاه معرفی صمیمی (یک یا دو جمله)\",\n  \"suggestions\": [\n    {\n      \"title\": \"عنوان کوتاه\",\n      \"origin\": \"شهر مبدا\",\n      \"transport\": \"هوایی یا زمینی یا ترکیبی\",\n      \"route\": \"مثلاً نجف 2 شب + کربلا 3 شب\",\n      \"nights\": 5,\n      \"hotel\": \"5 ستاره یا 4 ستاره یا 3 ستاره\",\n      \"priceMin\": 18000000,\n      \"priceMax\": 24000000,\n      \"highlight\": \"یه ویژگی کلیدی این پیشنهاد\"\n    }\n  ]\n}';

function toggleAIChat(){aiChatOpen?closeAIChat():openAIChat();}
function openAIChat(){
  aiChatOpen=true;
  document.getElementById('aichatPanel').classList.add('visible');
  document.getElementById('aichatFab').classList.add('open');
  document.getElementById('aichatFabIcon').textContent='✕';
  var badge=document.getElementById('aichatBadge');if(badge)badge.style.display='none';
  if(aiConvHistory.length===0)aiShowWelcome();
  setTimeout(function(){document.getElementById('aichatInput').focus();},300);
}
function closeAIChat(){
  aiChatOpen=false;
  document.getElementById('aichatPanel').classList.remove('visible');
  document.getElementById('aichatFab').classList.remove('open');
  document.getElementById('aichatFabIcon').textContent='✨';
  var badge=document.getElementById('aichatBadge');if(badge)badge.style.display='';
}
function aiShowWelcome(){
  aiAddMsg('bot','سلام! 👋 من مشاور هوشمند آوان هستم.\n\nبگو چه سفری می‌خوای — مثلاً «۵ روز کربلا و نجف، هوایی از تهران» — من همین لحظه چند پیشنهاد مناسب برات می‌چینم.');
}
function aiAddMsg(role,text){
  var msgs=document.getElementById('aichatMsgs');
  var wrap=document.createElement('div');
  wrap.className='aichat-msg '+(role==='user'?'user':'bot');
  var av=document.createElement('div');
  av.className='aichat-msg-avatar';
  av.textContent=role==='user'?'👤':'🕌';
  var bubble=document.createElement('div');
  bubble.className='aichat-bubble';
  bubble.innerHTML=text.replace(/\n/g,'<br/>');
  wrap.appendChild(av);wrap.appendChild(bubble);
  msgs.appendChild(wrap);
  msgs.scrollTop=msgs.scrollHeight;
  return wrap;
}
function aiShowTyping(){
  var msgs=document.getElementById('aichatMsgs');
  var wrap=document.createElement('div');
  wrap.className='aichat-msg bot';wrap.id='aiTypingWrap';
  var av=document.createElement('div');av.className='aichat-msg-avatar';av.textContent='🕌';
  var ind=document.createElement('div');ind.className='aichat-typing';
  ind.innerHTML='<span></span><span></span><span></span>';
  wrap.appendChild(av);wrap.appendChild(ind);
  msgs.appendChild(wrap);msgs.scrollTop=msgs.scrollHeight;
}
function aiRemoveTyping(){var el=document.getElementById('aiTypingWrap');if(el)el.remove();}
function aiRenderSuggestions(data){
  var msgs=document.getElementById('aichatMsgs');
  var wrap=document.createElement('div');
  wrap.className='aichat-msg bot';
  var av=document.createElement('div');av.className='aichat-msg-avatar';av.textContent='🕌';
  var container=document.createElement('div');
  container.style.cssText='display:flex;flex-direction:column;gap:8px;max-width:88%;';
  if(data.intro){
    var introBubble=document.createElement('div');
    introBubble.className='aichat-bubble';
    introBubble.textContent=data.intro;
    container.appendChild(introBubble);
  }
  var suggestions=data.suggestions||[];
  suggestions.forEach(function(s,i){
    var priceMin=Number(s.priceMin)||0;
    var priceMax=Number(s.priceMax)||0;
    var priceLabel=priceMin>0?aiFormatNum(priceMin)+' — '+aiFormatNum(priceMax)+' ت':'تماس بگیرید';
    var transportIcon=(s.transport&&s.transport.indexOf('هوایی')>-1)?'✈️':'🚌';
    var card=document.createElement('div');
    card.className='aichat-suggestion-card';
    card.innerHTML='<div class="asc-head"><div class="asc-head-icon">'+transportIcon+'</div><div class="asc-head-title">'+(s.title||'پیشنهاد سفر')+'</div><div class="asc-head-type">'+(s.transport||'')+'</div></div>'
      +'<div class="asc-body">'
      +'<div class="asc-row"><span class="asc-row-icon">📍</span><span>'+(s.origin||'')+'</span></div>'
      +'<div class="asc-row"><span class="asc-row-icon">🗺️</span><span>'+(s.route||'')+'</span></div>'
      +'<div class="asc-row"><span class="asc-row-icon">🌙</span><span>'+P(s.nights||0)+' شب اقامت</span></div>'
      +'<div class="asc-row"><span class="asc-row-icon">🏨</span><span>هتل '+(s.hotel||'')+'</span></div>'
      +(s.highlight?'<div class="asc-row" style="color:var(--em);font-weight:600;"><span class="asc-row-icon">✦</span><span>'+s.highlight+'</span></div>':'')
      +'</div>'
      +'<div class="asc-price-row"><div class="asc-price-label">هر نفر از</div><div class="asc-price-val">'+priceLabel+'</div></div>'
      +'<button class="asc-book-btn" onclick="aiBookSuggestion('+i+')">ثبت‌نام این سفر ✦</button>';
    container.appendChild(card);
  });
  window._aiLastSuggestions=suggestions;
  wrap.appendChild(av);wrap.appendChild(container);
  msgs.appendChild(wrap);msgs.scrollTop=msgs.scrollHeight;
}
function aiBookSuggestion(idx){
  var s=(window._aiLastSuggestions||[])[idx];
  if(!s)return;
  closeAIChat();
  var originMap={'تهران':'tehran','مشهد':'mashhad','اصفهان':'isfahan','شیراز':'shiraz','قم':'qom','تبریز':'tabriz','کرج':'karaj','اهواز':'ahvaz'};
  state.origin=originMap[s.origin]||'tehran';
  state.tripType=(s.transport&&s.transport.indexOf('هوایی')>-1)?'air':'land';
  state.cities=[];state.cityData={};
  if(s.route&&s.route.indexOf('کربلا')>-1){
    var n=parseInt((s.route.match(/کربلا\s*(\d)/)||[])[1])||3;
    state.cities.push('karbala');state.cityData['karbala']={nights:n,transit:false,hotel:null,food:true};
  }
  if(s.route&&s.route.indexOf('نجف')>-1){
    var n2=parseInt((s.route.match(/نجف\s*(\d)/)||[])[1])||2;
    state.cities.push('najaf');state.cityData['najaf']={nights:n2,transit:false,hotel:null,food:true};
  }
  if(s.route&&(s.route.indexOf('کاظمین')>-1||s.route.indexOf('سامرا')>-1)){
    state.cities.push('kadh_sam');state.cityData['kadh_sam']={nights:2,transit:false,hotel:null,food:true};
  }
  if(state.cities.length===0){
    state.cities=['karbala','najaf'];
    state.cityData={karbala:{nights:3,transit:false,hotel:null,food:true},najaf:{nights:2,transit:false,hotel:null,food:true}};
  }
  setTimeout(function(){
    document.getElementById('pccCityVal').textContent=s.origin||'تهران';
    document.getElementById('pccPaxVal').textContent=P(state.passengers);
    document.body.classList.add('sheet-open');
    document.getElementById('bsOverlay').classList.add('open');
    document.getElementById('bsSheet').classList.add('open');
    _goToStep(4);
  },300);
}
function aiSendMessage(){
  if(aiIsTyping)return;
  var input=document.getElementById('aichatInput');
  var text=input.value.trim();
  if(!text)return;
  input.value='';input.style.height='';
  document.getElementById('aichatSend').disabled=true;
  aiAddMsg('user',text);
  aiConvHistory.push({role:'user',content:text});
  aiGetResponse();
}
function aiQuickSend(text){
  if(!aiChatOpen)openAIChat();
  if(aiIsTyping)return;
  setTimeout(function(){
    document.getElementById('aichatInput').value=text;
    aiSendMessage();
  },aiChatOpen?0:400);
}
function aiGetResponse(){
  aiIsTyping=true;
  aiShowTyping();
  fetch('https://api.anthropic.com/v1/messages',{
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify({model:'claude-sonnet-4-20250514',max_tokens:1000,system:AI_SYSTEM_PROMPT,messages:aiConvHistory})
  }).then(function(r){return r.json();}).then(function(data){
    var rawText=(data.content||[]).map(function(c){return c.text||'';}).join('');
    aiRemoveTyping();
    var parsed=null;
    try{
      var clean=rawText.replace(/```json|```/g,'').trim();
      var m=clean.match(/\{[\s\S]*\}/);
      if(m)parsed=JSON.parse(m[0]);
    }catch(e){parsed=null;}
    if(parsed&&parsed.suggestions){
      aiRenderSuggestions(parsed);
    } else {
      aiAddMsg('bot',rawText||'متأسفم، خطایی رخ داد. لطفاً دوباره امتحان کن.');
    }
    aiConvHistory.push({role:'assistant',content:rawText||''});
    aiIsTyping=false;
    document.getElementById('aichatSend').disabled=false;
  }).catch(function(){
    aiRemoveTyping();
    aiAddMsg('bot','اتصال برقرار نشد. لطفاً دوباره تلاش کن یا با پشتیبانی تماس بگیر.');
    aiIsTyping=false;
    document.getElementById('aichatSend').disabled=false;
  });
}
function aiInputKeyDown(e){if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();aiSendMessage();}}
function aiInputResize(el){el.style.height='auto';el.style.height=Math.min(el.scrollHeight,80)+'px';}
function aiFormatNum(n){return P(Math.round(n).toLocaleString('en'));}

// ============================
// ══ HOTEL PREVIEW SHEET — redesigned v2 ══
(function(){
  'use strict';

  // Unsplash photo collections — 4 images per hotel style
  var HOTEL_PHOTOS = {
    'عباسیه':    ['photo-1566073771259-6a8506099945','photo-1590490360182-c33d57733427','photo-1618773928121-c32242e63f39','photo-1621293954908-907159247fc8'],
    'امیرالمؤمنین':['photo-1551882547-ff40c63fe5fa','photo-1566073771259-6a8506099945','photo-1590490360182-c33d57733427','photo-1613490493576-7fde63acd811'],
    'الحسین':    ['photo-1602002418082-a4443e081dd1','photo-1551882547-ff40c63fe5fa','photo-1590490360182-c33d57733427','photo-1618773928121-c32242e63f39'],
    'نجف گرند':  ['photo-1613490493576-7fde63acd811','photo-1566073771259-6a8506099945','photo-1551882547-ff40c63fe5fa','photo-1602002418082-a4443e081dd1'],
    'النجف':     ['photo-1613490493576-7fde63acd811','photo-1566073771259-6a8506099945','photo-1590490360182-c33d57733427','photo-1618773928121-c32242e63f39'],
    'الامین':    ['photo-1621293954908-907159247fc8','photo-1566073771259-6a8506099945','photo-1590490360182-c33d57733427','photo-1618773928121-c32242e63f39'],
    'الکاظمیه': ['photo-1564501049412-61c2a3083791','photo-1566073771259-6a8506099945','photo-1590490360182-c33d57733427','photo-1621293954908-907159247fc8'],
    'العسکری':  ['photo-1618773928121-c32242e63f39','photo-1590490360182-c33d57733427','photo-1566073771259-6a8506099945','photo-1613490493576-7fde63acd811'],
    '_default':  ['photo-1566073771259-6a8506099945','photo-1590490360182-c33d57733427','photo-1551882547-ff40c63fe5fa','photo-1618773928121-c32242e63f39']
  };

  // Room type labels for each photo position
  var PHOTO_LABELS = ['لابی و فضای اصلی','اتاق دابل / تویین','حمام و سرویس','نمای خارجی'];

  function getPhotos(hotelName){
    var keys=Object.keys(HOTEL_PHOTOS);
    for(var i=0;i<keys.length;i++){
      if(keys[i]!=='_default'&&hotelName.indexOf(keys[i])>-1) return HOTEL_PHOTOS[keys[i]];
    }
    return HOTEL_PHOTOS['_default'];
  }
  function photoUrl(id,w,h){ return 'https://images.unsplash.com/'+id+'?w='+w+'&h='+h+'&fit=crop&q=82'; }

  var hpmState = { cityKey:null, hotelIdx:null, hotel:null, photos:[], activeCell:0 };

  window.openHotelPhotoModal = function(cityKey, hotelIdx){
    var hotel = HOTEL_DATA[cityKey] && HOTEL_DATA[cityKey][hotelIdx];
    if(!hotel) return;

    hpmState.cityKey=cityKey; hpmState.hotelIdx=hotelIdx;
    hpmState.hotel=hotel; hpmState.activeCell=0;
    hpmState.photos = getPhotos(hotel.name);

    // Header name
    document.getElementById('hpmHotelName').textContent = hotel.name;

    // Header meta: stars + grade + distance
    var gradeTxt = hotel.cat==='alef'?'درجه الف':hotel.cat==='be'?'درجه ب':'درجه ج';
    var starsHtml = '<div class="hpm-stars">';
    for(var i=1;i<=5;i++) starsHtml+='<div class="hpm-star '+(i<=hotel.stars?'on':'off')+'"></div>';
    starsHtml+='</div>';
    var meta = CITY_META[cityKey];
    document.getElementById('hpmHotelMeta').innerHTML =
      starsHtml +
      '<div class="hpm-header-meta-pill gold">'+gradeTxt+'</div>'+
      '<div class="hpm-header-meta-pill">'+hotel.dist+' از حرم</div>'+
      (meta?'<div class="hpm-header-meta-pill">'+meta.name+'</div>':'');

    // Build info pills
    var distSVG='<svg viewBox="0 0 16 16"><circle cx="8" cy="6" r="3"/><path d="M8 1a5 5 0 010 10C5 11 2 8.5 2 6a6 6 0 0112 0c0 2.5-3 5-6 5z"/></svg>';
    var bedSVG='<svg viewBox="0 0 16 16"><rect x="1" y="6" width="14" height="7" rx="2"/><rect x="4" y="9" width="3" height="3" rx="1"/><rect x="9" y="9" width="3" height="3" rx="1"/><path d="M1 10V5a2 2 0 012-2h10a2 2 0 012 2v5"/></svg>';
    var foodSVG='<svg viewBox="0 0 16 16"><path d="M4 2v5a3 3 0 006 0V2M7 2v12M4 7h6"/></svg>';
    document.getElementById('hpmInfo').innerHTML =
      '<div class="hpm-info-pill">'+distSVG+hotel.dist+'</div>'+
      '<div class="hpm-info-pill">'+bedSVG+hotel.stars+' ستاره</div>'+
      '<div class="hpm-info-pill">'+foodSVG+'صبحانه شامل</div>'+
      (meta?'<div class="hpm-info-pill">🕌 '+meta.shrine+'</div>':'');

    hpmBuildGrid();

    document.getElementById('hpmOverlay').classList.add('open');
    document.body.classList.add('sheet-open');
  };

  function hpmBuildGrid(){
    var grid = document.getElementById('hpmPhotoGrid');
    grid.innerHTML = '';
    var photos = hpmState.photos;

    photos.forEach(function(id, i){
      var cell = document.createElement('div');
      cell.className = 'hpm-photo-cell' + (i===0?' active-cell':'');
      cell.id = 'hpmCell_' + i;

      var ww = i===0 ? 800 : 400;
      var hh = i===0 ? 320 : 240;
      var img = document.createElement('img');
      img.src = photoUrl(id, ww, hh);
      img.alt = PHOTO_LABELS[i] || 'عکس هتل';
      img.loading = 'lazy';
      cell.appendChild(img);

      // Label badge on each cell
      var lbl = document.createElement('div');
      lbl.style.cssText = 'position:absolute;bottom:8px;right:8px;background:rgba(0,0,0,.6);color:rgba(255,255,255,.85);font-size:9px;font-weight:700;padding:2px 8px;border-radius:100px;backdrop-filter:blur(4px);pointer-events:none;font-family:Vazirmatn,sans-serif;';
      lbl.textContent = PHOTO_LABELS[i] || '';
      cell.appendChild(lbl);

      // Fullscreen on first cell tap
      if(i===0){
        var counter = document.createElement('div');
        counter.className = 'hpm-grid-counter';
        counter.id = 'hpmCounter';
        counter.textContent = '۴ عکس';
        counter.style.direction = 'rtl';
        cell.appendChild(counter);

        var expandBtn = document.createElement('button');
        expandBtn.className = 'hpm-expand-btn';
        expandBtn.innerHTML = '<svg viewBox="0 0 16 16"><polyline points="10 2 14 2 14 6"/><polyline points="6 14 2 14 2 10"/><line x1="14" y1="2" x2="9" y2="7"/><line x1="2" y1="14" x2="7" y2="9"/></svg>';
        expandBtn.onclick = function(e){ e.stopPropagation(); hpmOpenFullscreen(i); };
        cell.appendChild(expandBtn);
      }

      cell.onclick = function(){ hpmOpenFullscreen(i); };
      grid.appendChild(cell);
    });
  }

  function hpmOpenFullscreen(idx){
    var id = hpmState.photos[idx];
    if(!id) return;
    document.getElementById('hpmFullImg').src = photoUrl(id, 1200, 900);
    document.getElementById('hpmFullscreen').classList.add('open');
  }

  window.hpmNav = function(dir){
    // legacy — not used in grid view but kept for compat
  };

  window.closeHpm = function(){
    document.getElementById('hpmOverlay').classList.remove('open');
    document.body.classList.remove('sheet-open');
  };

  window.hpmOverlayClick = function(e){
    if(e.target===document.getElementById('hpmOverlay')) closeHpm();
  };

  window.hpmConfirm = function(){
    var ck=hpmState.cityKey, hi=hpmState.hotelIdx;
    closeHpm();
    setTimeout(function(){
      if(window._hpmWizardCallback){
        window._hpmWizardCallback();
        window._hpmWizardCallback=null;
      } else {
        selHotel(ck, hi);
      }
    }, 280);
  };

  window.hpmPickOther = function(){
    closeHpm();
    var ck = hpmState.cityKey;
    var drawer = document.getElementById('ccd_'+ck);
    if(drawer){
      drawer.classList.add('open');
      setTimeout(function(){
        ['alef','be','jim'].forEach(function(g){
          var gi=document.getElementById('gi_'+ck+'_'+g);
          if(gi) gi.classList.add('open');
          var inner=document.getElementById('hci_'+ck+'_'+g);
          if(inner&&!inner.hasChildNodes()) togGradeItem(ck,g);
        });
        drawer.scrollIntoView({behavior:'smooth',block:'start'});
      },350);
    }
  };

})();
// ============================
(function(){
  'use strict';
  var CITIES = [
    {city:'tabriz',     name:'تبریز',      icon:'🏔'},
    {city:'qom',        name:'قم',         icon:'🕌'},
    {city:'karaj',      name:'کرج',        icon:'🌳'},
    {city:'ahvaz',      name:'اهواز',      icon:'🛢'},
    {city:'rasht',      name:'رشت',        icon:'🌧'},
    {city:'kermanshah', name:'کرمانشاه',   icon:'🏛'},
    {city:'arak',       name:'اراک',       icon:'🏭'},
    {city:'yazd',       name:'یزد',        icon:'🌵'},
    {city:'other',      name:'سایر',       icon:'📍'}
  ];

  var CITY_SVGS = {
    tabriz:     '<svg class="city-chip-svg" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>',
    qom:        '<svg class="city-chip-svg" viewBox="0 0 24 24"><path d="M12 2a5 5 0 0 1 5 5c0 3-5 9-5 9S7 10 7 7a5 5 0 0 1 5-5z"/><circle cx="12" cy="7" r="2"/></svg>',
    karaj:      '<svg class="city-chip-svg" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
    ahvaz:      '<svg class="city-chip-svg" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M3 15h18M9 3v18M15 3v18"/></svg>',
    rasht:      '<svg class="city-chip-svg" viewBox="0 0 24 24"><path d="M12 22s-8-6-8-12a8 8 0 0 1 16 0c0 6-8 12-8 12z"/><circle cx="12" cy="10" r="3"/></svg>',
    kermanshah: '<svg class="city-chip-svg" viewBox="0 0 24 24"><polygon points="12 2 22 20 2 20"/><line x1="12" y1="10" x2="12" y2="16"/><line x1="12" y1="19" x2="12" y2="19"/></svg>',
    arak:       '<svg class="city-chip-svg" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/></svg>',
    yazd:       '<svg class="city-chip-svg" viewBox="0 0 24 24"><path d="M3 21h18M5 21V7l7-4 7 4v14"/><path d="M9 21v-4h6v4"/></svg>',
    other:      '<svg class="city-chip-svg" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>'
  };

  function init(){
    var row = document.getElementById('cityStripRow');
    if(!row) return;
    row.innerHTML = '';
    CITIES.forEach(function(c){
      var el = document.createElement('div');
      el.className = 'city-chip';
      el.dataset.city = c.city;
      var svgIcon = CITY_SVGS[c.city] || CITY_SVGS['other'];
      el.innerHTML =
        svgIcon +
        '<div class="city-chip-name">'+c.name+'</div>';
      el.addEventListener('click', function(){
        document.querySelectorAll('.city-chip').forEach(function(x){ x.classList.remove('selected'); });
        document.querySelectorAll('.origin-card').forEach(function(x){ x.classList.remove('selected'); });
        el.classList.add('selected');
        state.origin = c.city;
        resetFlow();
        openBottomSheet();
      });
      row.appendChild(el);
    });
  }

  if(document.readyState==='loading'){
    document.addEventListener('DOMContentLoaded', init);
  } else {
    setTimeout(init, 40);
  }
})();

// ══ TYPEWRITER HERO SLOGAN ══
(function(){
  var phrases = [
    { parts: [
        {text: 'این بار انتخاب با ', plain: true},
        {text: 'شماست', hl: true},
        {text: '، نه یک کاروان از پیش تعیین‌شده', plain: true}
    ]},
    { parts: [
        {text: 'سفر زیارتی ', plain: true},
        {text: 'نجف اشرف', hl: true},
        {text: ' و کربلای معلی', plain: true}
    ]},
    { parts: [
        {text: 'زمان، هتل و مسیر را ', plain: true},
        {text: 'خودتان', hl: true},
        {text: ' انتخاب کنید', plain: true}
    ]},
    { parts: [
        {text: 'سفری متناسب با ', plain: true},
        {text: 'بودجه', hl: true},
        {text: ' و سلیقه شما', plain: true}
    ]}
  ];

  var el = document.getElementById('heroTypewriter');
  if(!el) return;

  var phraseIdx = 0;
  var charIdx = 0;
  var isDeleting = false;
  var isPaused = false;
  var fullText = '';
  var renderedParts = [];

  function buildFullText(phrase){
    var t = '';
    phrase.parts.forEach(function(p){ t += p.text; });
    return t;
  }

  function renderWithHighlight(phrase, visibleLen){
    var html = '';
    var consumed = 0;
    for(var i = 0; i < phrase.parts.length; i++){
      var part = phrase.parts[i];
      var partLen = part.text.length;
      var take = Math.max(0, Math.min(partLen, visibleLen - consumed));
      var chunk = part.text.slice(0, take);
      if(chunk){
        if(part.hl){
          html += '<span class="hl">' + chunk + '</span>';
        } else {
          html += chunk;
        }
      }
      consumed += partLen;
      if(consumed >= visibleLen) break;
    }
    return html;
  }

  function tick(){
    var phrase = phrases[phraseIdx];
    fullText = buildFullText(phrase);

    if(isPaused){ isPaused = false; setTimeout(tick, isDeleting ? 40 : 40); return; }

    if(!isDeleting){
      charIdx++;
      if(charIdx > fullText.length){
        // pause then delete
        isPaused = true;
        el.innerHTML = renderWithHighlight(phrase, fullText.length) + '<span class="tw-cursor"></span>';
        setTimeout(function(){ isDeleting = true; tick(); }, 2400);
        return;
      }
    } else {
      charIdx--;
      if(charIdx <= 0){
        isDeleting = false;
        phraseIdx = (phraseIdx + 1) % phrases.length;
        el.innerHTML = '<span class="tw-cursor"></span>';
        setTimeout(tick, 420);
        return;
      }
    }

    el.innerHTML = renderWithHighlight(phrase, charIdx) + '<span class="tw-cursor"></span>';
    var speed = isDeleting ? 28 : (charIdx < 4 ? 120 : 42);
    setTimeout(tick, speed);
  }

  // Start after short delay
  setTimeout(function(){
    el.innerHTML = '<span class="tw-cursor"></span>';
    setTimeout(tick, 600);
  }, 800);
})();



// ══ CARAVAN V2 ══
(function(){
  'use strict';

  // ── Data ──────────────────────────────────────────────────────────────
  var CITIES = [
    { city:'تهران',      icon:'🏙', type:'air'  },
    { city:'مشهد',       icon:'🕌', type:'air'  },
    { city:'اصفهان',     icon:'🌉', type:'air'  },
    { city:'شیراز',      icon:'🌸', type:'land' },
    { city:'تبریز',      icon:'🏔', type:'land' },
    { city:'کرج',        icon:'🌳', type:'land' }
  ];

  var PM_LOCAL = ['فروردین','اردیبهشت','خرداد','تیر','مرداد','شهریور',
                  'مهر','آبان','آذر','دی','بهمن','اسفند'];

  var DATA = {
    'تهران': {
      3: [
        { id:1, day:17, type:'land', cap:14, total:40, dur:'۸ روز', route:'کربلا + نجف',           price:'۸,۲۰۰,۰۰۰' },
        { id:2, day:19, type:'land', cap:12, total:40, dur:'۸ روز', route:'کربلا + نجف',           price:'۸,۲۰۰,۰۰۰' },
        { id:3, day:20, type:'air',  cap:8,  total:30, dur:'۷ روز', route:'کربلا + نجف + کاظمین', price:'۱۴,۵۰۰,۰۰۰' },
        { id:4, day:22, type:'land', cap:5,  total:40, dur:'۱۰ روز',route:'کربلا + نجف + سامرا',  price:'۹,۸۰۰,۰۰۰' },
        { id:5, day:25, type:'air',  cap:15, total:30, dur:'۷ روز', route:'کربلا + نجف',           price:'۱۳,۸۰۰,۰۰۰' }
      ],
      4: [
        { id:8, day:3,  type:'air',  cap:18, total:30, dur:'۷ روز', route:'کربلا + نجف',           price:'۱۳,۸۰۰,۰۰۰' },
        { id:9, day:8,  type:'land', cap:22, total:40, dur:'۸ روز', route:'کربلا + نجف + کاظمین', price:'۸,۹۰۰,۰۰۰' }
      ]
    },
    'مشهد': {
      3: [
        { id:20, day:18, type:'air', cap:20, total:30, dur:'۷ روز', route:'کربلا + نجف',           price:'۱۶,۲۰۰,۰۰۰' },
        { id:21, day:24, type:'air', cap:11, total:30, dur:'۷ روز', route:'کربلا + نجف + کاظمین', price:'۱۷,۵۰۰,۰۰۰' }
      ],
      4: [
        { id:23, day:5,  type:'air', cap:24, total:30, dur:'۷ روز', route:'کربلا + نجف',           price:'۱۶,۲۰۰,۰۰۰' }
      ]
    },
    'اصفهان': {
      3: [ { id:30, day:20, type:'air', cap:22, total:30, dur:'۷ روز', route:'کربلا + نجف',           price:'۱۵,۸۰۰,۰۰۰' } ],
      4: [ { id:32, day:10, type:'air', cap:19, total:30, dur:'۷ روز', route:'کربلا + نجف + کاظمین', price:'۱۶,۵۰۰,۰۰۰' } ]
    },
    'شیراز': {
      3: [ { id:40, day:21, type:'land', cap:16, total:36, dur:'۱۰ روز', route:'کربلا + نجف', price:'۹,۶۰۰,۰۰۰' } ],
      4: [ { id:42, day:15, type:'land', cap:21, total:36, dur:'۱۰ روز', route:'کربلا + نجف', price:'۹,۶۰۰,۰۰۰' } ]
    },
    'تبریز': {
      3: [ { id:50, day:23, type:'land', cap:13, total:38, dur:'۹ روز', route:'کربلا + نجف', price:'۸,۸۰۰,۰۰۰' } ],
      4: [ { id:51, day:7,  type:'land', cap:25, total:38, dur:'۹ روز', route:'کربلا + نجف', price:'۸,۸۰۰,۰۰۰' } ]
    },
    'کرج': {
      3: [ { id:60, day:19, type:'land', cap:18, total:40, dur:'۸ روز', route:'کربلا + نجف',           price:'۸,۰۰۰,۰۰۰' } ],
      4: [ { id:62, day:12, type:'land', cap:20, total:40, dur:'۸ روز', route:'کربلا + نجف + کاظمین', price:'۸,۹۰۰,۰۰۰' } ]
    }
  };

  var MONTHS = [3, 4];

  // ── State ─────────────────────────────────────────────────────────────
  var st = { city: 'تهران', filter: 'all', openId: null };

  // ── Toggle accordion ──────────────────────────────────────────────────
  window.toggleCv2 = function(){
    var toggle = document.getElementById('cv2Toggle');
    var body   = document.getElementById('cv2Body');
    var isOpen = toggle.classList.contains('open');
    toggle.classList.toggle('open', !isOpen);
    body.classList.toggle('open', !isOpen);
    if(!isOpen){ cv2Init(); }
  };

  // ── Scroll to hero ────────────────────────────────────────────────────
  window.scrollToHeroAndOpen = function(){
    var hero = document.querySelector('.hero-step-wrap');
    if(hero) hero.scrollIntoView({ behavior:'smooth', block:'center' });
  };

  // ── Init ──────────────────────────────────────────────────────────────
  function cv2Init(){
    buildCityPills();
    cv2Render();
  }

  function buildCityPills(){
    var wrap = document.getElementById('cv2CityPills');
    if(!wrap || wrap.children.length > 0) return; // already built
    CITIES.forEach(function(c){
      var pill = document.createElement('div');
      pill.className = 'cv2-city-pill' + (c.city === st.city ? ' active' : '');
      pill.innerHTML =
        '<div class="cv2-city-pill-dot"></div>' + c.city;
      pill.onclick = function(){
        st.city  = c.city;
        st.openId = null;
        document.querySelectorAll('.cv2-city-pill').forEach(function(p){ p.classList.remove('active'); });
        pill.classList.add('active');
        cv2Render();
      };
      wrap.appendChild(pill);
    });
  }

  // ── Filter ────────────────────────────────────────────────────────────
  window.cv2SetFilter = function(f){
    st.filter = f;
    st.openId = null;
    ['all','air','land'].forEach(function(k){
      var el = document.getElementById('cv2Tab' + k.charAt(0).toUpperCase() + k.slice(1));
      if(el) el.classList.toggle('active', k === f);
    });
    cv2Render();
  };

  // ── Helpers ───────────────────────────────────────────────────────────
  function toFarsi(n){ return String(n).replace(/\d/g, function(d){ return '۰۱۲۳۴۵۶۷۸۹'[d]; }); }
  function capCls(cap, total){ var r = cap/total; return r>=.38?'hi':r>=.13?'mi':'lo'; }
  function capLabel(cap, total){
    if(cap<=0) return 'تکمیل ظرفیت';
    var r = cap/total;
    if(r<.13) return toFarsi(cap)+' نفر — آخرین فرصت';
    if(r<.38) return toFarsi(cap)+' نفر — محدود';
    return toFarsi(cap)+' صندلی خالی';
  }
  function capPct(cap, total){ return Math.round(cap/total*100); }

  // ── SVG icons ─────────────────────────────────────────────────────────
  var SVG_AIR = '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" stroke="#134a3a">'
    + '<path d="M21 16l-6-3 2-7-4 2-4-4-5 3 5 3-2 4 3-1 2 5z"/>'
    + '</svg>';

  var SVG_BUS = '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" stroke="#8a6820">'
    + '<rect x="2" y="6" width="20" height="13" rx="3"/>'
    + '<path d="M6 6V4a2 2 0 012-2h8a2 2 0 012 2v2"/>'
    + '<circle cx="7" cy="21" r="1.8"/>'
    + '<circle cx="17" cy="21" r="1.8"/>'
    + '<line x1="7" y1="19" x2="17" y2="19"/>'
    + '<line x1="2" y1="11" x2="22" y2="11"/>'
    + '<line x1="8" y1="11" x2="8" y2="19"/>'
    + '<line x1="16" y1="11" x2="16" y2="19"/>'
    + '</svg>';

  // ── Render list ───────────────────────────────────────────────────────
  function cv2Render(){
    var list  = document.getElementById('cv2List');
    var empty = document.getElementById('cv2Empty');
    if(!list) return;

    // Gather + filter
    var all = [];
    MONTHS.forEach(function(m){
      ((DATA[st.city]||{})[m]||[]).forEach(function(ev){
        all.push(Object.assign({}, ev, { month: m }));
      });
    });
    if(st.filter !== 'all') all = all.filter(function(ev){ return ev.type === st.filter; });
    all.sort(function(a,b){ return a.month!==b.month ? a.month-b.month : a.day-b.day; });

    list.innerHTML = '';

    if(!all.length){
      list.style.display = 'none';
      empty.style.display = 'block';
      return;
    }
    list.style.display = '';
    empty.style.display = 'none';

    all.forEach(function(ev){
      var isOpen  = st.openId === ev.id;
      var cls     = capCls(ev.cap, ev.total);
      var pct     = capPct(ev.cap, ev.total);
      var monthName = PM_LOCAL[ev.month - 1];
      var transportIcon = ev.type==='air' ? SVG_AIR : SVG_BUS;
      var typeLabel     = ev.type==='air' ? 'هوایی' : 'زمینی';
      var typeBoxCls    = ev.type==='air' ? 'air' : 'land';

      var card = document.createElement('div');
      card.className = 'cv2-card' + (isOpen ? ' open' : '');
      card.id = 'cv2card_' + ev.id;

      card.innerHTML =
        // ── Head ──
        '<div class="cv2-card-head" onclick="cv2ToggleCard(' + ev.id + ')">'
          + '<div class="cv2-transport-box ' + typeBoxCls + '">' + transportIcon + '</div>'
          + '<div class="cv2-date-block">'
            + '<div class="cv2-date-day">' + toFarsi(ev.day) + '</div>'
            + '<div class="cv2-date-month">' + monthName + '</div>'
          + '</div>'
          + '<div class="cv2-vdiv"></div>'
          + '<div class="cv2-info">'
            + '<div class="cv2-info-route">' + ev.route + '</div>'
            + '<div class="cv2-info-meta">'
              + '<span class="cv2-info-tag ' + typeBoxCls + '">' + typeLabel + '</span>'
              + '<span class="cv2-info-tag dur">🌙 ' + ev.dur + '</span>'
            + '</div>'
          + '</div>'
          + '<div class="cv2-cap ' + cls + '"><div class="cv2-cap-dot"></div>' + (ev.cap<=0 ? 'تکمیل' : toFarsi(ev.cap)+' نفر') + '</div>'
          + '<div class="cv2-chevron">▼</div>'
        + '</div>'

        // ── Expanded body ──
        + '<div class="cv2-card-body">'
          + '<div class="cv2-card-detail">'
            + '<div class="cv2-detail-grid">'
              + '<div class="cv2-detail-cell"><div class="cv2-detail-label">تاریخ</div><div class="cv2-detail-val">' + toFarsi(ev.day) + ' ' + monthName + '</div></div>'
              + '<div class="cv2-detail-cell"><div class="cv2-detail-label">مبدا</div><div class="cv2-detail-val">' + st.city + '</div></div>'
              + '<div class="cv2-detail-cell"><div class="cv2-detail-label">مدت سفر</div><div class="cv2-detail-val">' + ev.dur + '</div></div>'
              + '<div class="cv2-detail-cell"><div class="cv2-detail-label">قیمت / نفر</div><div class="cv2-detail-val price">' + ev.price + ' ت</div></div>'
            + '</div>'
            + '<div class="cv2-cap-bar-wrap">'
              + '<div class="cv2-cap-bar-top"><span>وضعیت ظرفیت</span><span class="cv2-cap ' + cls + '" style="padding:2px 8px;">' + '<div class="cv2-cap-dot" style="display:inline-block;margin-left:4px;vertical-align:middle;"></div>' + capLabel(ev.cap, ev.total) + '</span></div>'
              + '<div class="cv2-cap-bar-track"><div class="cv2-cap-bar-fill ' + cls + '" style="width:' + pct + '%;"></div></div>'
            + '</div>'
            + '<button class="cv2-book-btn" onclick="cv2Book(' + ev.id + ',' + ev.month + ')">'
              + (ev.type==='air' ? '<svg style="width:16px;height:16px;stroke:var(--em);fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;" viewBox="0 0 24 24"><path d="M21 16l-6-3 2-7-4 2-4-4-5 3 5 3-2 4 3-1 2 5z"/></svg>' : '<svg style="width:16px;height:16px;stroke:var(--em);fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;" viewBox="0 0 24 24"><rect x="2" y="6" width="20" height="13" rx="3"/><line x1="2" y1="11" x2="22" y2="11"/></svg>')
              + 'رزرو این کاروان'
            + '</button>'
          + '</div>'
        + '</div>';

      list.appendChild(card);
    });
  }

  // ── Toggle card ───────────────────────────────────────────────────────
  window.cv2ToggleCard = function(id){
    st.openId = (st.openId === id) ? null : id;
    cv2Render();
  };

  // ── Book (open existing CRM modal) ────────────────────────────────────
  window.cv2Book = function(id, month){
    // Find event
    var all = [];
    MONTHS.forEach(function(m){
      ((DATA[st.city]||{})[m]||[]).forEach(function(ev){
        all.push(Object.assign({}, ev, {month:m}));
      });
    });
    var ev = all.find(function(e){ return e.id===id; });
    if(!ev) return;
    var dateStr = toFarsi(ev.day) + ' ' + PM_LOCAL[ev.month-1];
    // reuse existing cvBook function
    if(typeof cvBook === 'function'){
      cvBook(ev.id, dateStr, ev.route, ev.price, ev.type==='air'?'هوایی':'زمینی', ev.dur);
    }
  };

})();




/* ═══════════════════════════ AVAN PATCH v3 ═══════════════════════════ */

/* ① پرش صفحه — همیشه از بالا */
(function(){
  if(window.location.hash && window.location.hash !== '#' && !window.location.search.includes('payment')){
    history.replaceState(null,'',window.location.pathname+window.location.search);
  }
  // force scroll to top after all deferred scripts run
  window.addEventListener('load',function(){
    requestAnimationFrame(function(){
      window.scrollTo({top:0,left:0,behavior:'instant'});
    });
  });
})();

/* ② فابها بعد از اسکرول از هرو */
document.addEventListener('DOMContentLoaded',function(){
  var hero=document.querySelector('.hero');
  var fabWrap=document.querySelector('.aichat-fab-wrap');
  var support=document.querySelector('.floating-support');
  function show(){ if(fabWrap)fabWrap.classList.add('fabs-visible'); if(support)support.classList.add('fabs-visible'); }
  function hide(){ if(fabWrap)fabWrap.classList.remove('fabs-visible'); if(support)support.classList.remove('fabs-visible'); }
  hide();
  if(hero&&window.IntersectionObserver){
    new IntersectionObserver(function(entries){
      entries.forEach(function(e){ e.isIntersecting?hide():show(); });
    },{threshold:0.05}).observe(hero);
  } else { show(); }
});

/* ③④⑤⑥⑦ — ویزارد شهرهای زیارتی */
(function(){
  'use strict';

  var KEYS=['karbala','najaf','kadh_sam'];
  var NAMES={karbala:'کربلای معلی',najaf:'نجف اشرف',kadh_sam:'کاظمین و سامرا'};
  var SHRINES={karbala:'حرم امام حسین (ع)',najaf:'حرم امام علی (ع)',kadh_sam:'حرم امام کاظم و عسکریین (ع)'};
  var SVGS={
    karbala:'<svg viewBox="0 0 32 32" fill="none" stroke="#e8c97a" stroke-width="1.6" stroke-linecap="round"><line x1="16" y1="3" x2="16" y2="6"/><path d="M11 12 Q16 5 21 12"/><path d="M10 12 L10 22 L22 22 L22 12"/><rect x="13" y="15" width="6" height="7"/><line x1="6" y1="22" x2="26" y2="22"/></svg>',
    najaf:'<svg viewBox="0 0 32 32" fill="none" stroke="#e8c97a" stroke-width="1.6" stroke-linecap="round"><circle cx="16" cy="7" r="4.5"/><line x1="16" y1="2.5" x2="16" y2="1"/><path d="M10 12 Q16 8 22 12"/><rect x="11" y="12" width="10" height="11"/><rect x="14" y="16" width="4" height="7"/></svg>',
    kadh_sam:'<svg viewBox="0 0 32 32" fill="none" stroke="#e8c97a" stroke-width="1.6" stroke-linecap="round"><path d="M5 14 Q8 7 11 14"/><rect x="4" y="14" width="8" height="10"/><path d="M15 15 Q18 8 21 15"/><rect x="14" y="15" width="8" height="9"/></svg>'
  };
  var HOTELS={
    karbala:[
      {name:'هتل عباسیه گرند',stars:5,dist:'۸۰ متر',cat:'alef'},
      {name:'هتل الحسین انترنشنال',stars:5,dist:'۱۰۰ متر',cat:'alef'},
      {name:'هتل کربلا اینترنشنال',stars:4,dist:'۲۰۰ متر',cat:'be'},
      {name:'هتل فرات',stars:3,dist:'۳۵۰ متر',cat:'be'},
      {name:'هتل الکوثر',stars:2,dist:'۶۰۰ متر',cat:'jim'}
    ],
    najaf:[
      {name:'هتل امیرالمؤمنین',stars:5,dist:'۵۰ متر',cat:'alef'},
      {name:'هتل نجف گرند',stars:5,dist:'۸۰ متر',cat:'alef'},
      {name:'هتل نجف پالاس',stars:4,dist:'۱۵۰ متر',cat:'be'},
      {name:'هتل المشرق',stars:3,dist:'۳۰۰ متر',cat:'be'},
      {name:'هتل النخیل',stars:2,dist:'۵۵۰ متر',cat:'jim'}
    ],
    kadh_sam:[
      {name:'هتل الامین الکاظمیه',stars:5,dist:'۷۰ متر',cat:'alef'},
      {name:'هتل الکاظمیه پالاس',stars:4,dist:'۱۲۰ متر',cat:'be'},
      {name:'هتل الرشید',stars:3,dist:'۲۵۰ متر',cat:'be'},
      {name:'هتل الفرحان',stars:2,dist:'۶۵۰ متر',cat:'jim'}
    ]
  };
  var CAT_LABELS={alef:'الف — لوکس',be:'ب — متوسط',jim:'ج — اقتصادی'};

  /* state */
  var WS={cities:[],nights:{},transit:{},hotel:{},phase:{}}; /* phase: ''|'nights'|'hotel'|'done' */

  function P(n){return String(n).replace(/\d/g,function(d){return'۰۱۲۳۴۵۶۷۸۹'[d];});}
  function starDots(n){var s='';for(var i=1;i<=5;i++)s+='<span style="display:inline-block;width:7px;height:7px;border-radius:50%;background:'+(i<=n?'#c9a84c':'rgba(255,255,255,.2)')+';margin:0 1px"></span>';return s;}

  function getGrid(){return document.getElementById('wsCityGrid');}

  /* ── رندر کامل ── */
  function wsRender(){
    var grid=getGrid(); if(!grid)return;
    grid.innerHTML='';

    /* اول شهرهای انتخاب‌شده به ترتیب */
    WS.cities.forEach(function(key,i){ grid.appendChild(makeCard(key,i+1)); });
    /* بعد بقیه */
    KEYS.forEach(function(key){ if(WS.cities.indexOf(key)===-1) grid.appendChild(makeCard(key,0)); });

    syncIW();
    updateRoutePreview();
  }

  function makeCard(key,order){
    var inSel=WS.cities.indexOf(key)>-1;
    var phase=WS.phase[key]||'';

    var card=document.createElement('div');
    card.id='wsCard_'+key;

    /* استایل کارت */
    var borderColor=inSel?(phase==='done'?'var(--gold)':'rgba(201,168,76,.55)'):'rgba(255,255,255,.12)';
    var bgCard=inSel?(phase==='done'?'linear-gradient(135deg,rgba(201,168,76,.14),rgba(26,94,73,.1))':'rgba(201,168,76,.09)'):'rgba(255,255,255,.05)';
    card.style.cssText='background:'+bgCard+';border:1.5px solid '+borderColor+';border-radius:18px;padding:14px 16px;margin-bottom:0;transition:all .3s;overflow:hidden;';

    /* هدر کارت */
    var orderBadge=order>0?'<div style="position:absolute;top:10px;left:14px;width:22px;height:22px;background:var(--em);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:800;color:var(--goldL);border:1.5px solid rgba(201,168,76,.4);">'+P(order)+'</div>':'';
    var tick = inSel
      ? '<div style="position:absolute;top:12px;right:14px;width:22px;height:22px;border-radius:50%;background:#c9a84c;display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:all .3s;box-shadow:0 2px 8px rgba(201,168,76,.4);"><svg width=\"11\" height=\"11\" viewBox=\"0 0 12 12\" fill=\"none\"><polyline points=\"1.5 6 4.5 9 10.5 3\" stroke=\"#0d3b2e\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg></div>'
      : '<div style="position:absolute;top:12px;right:14px;width:22px;height:22px;border-radius:50%;border:1.5px solid rgba(255,255,255,.2);transition:all .3s;"></div>';

    var nameColor=inSel?'var(--goldL)':'rgba(255,255,255,.9)';
    var headerHtml='<div style="display:flex;align-items:center;gap:12px;position:relative;cursor:pointer;" onclick="wsTapCard(\''+key+'\')">'
      +'<div style="width:40px;height:40px;background:linear-gradient(135deg,var(--em),var(--em3));border-radius:11px;display:flex;align-items:center;justify-content:center;flex-shrink:0;">'+SVGS[key]+'</div>'
      +'<div style="flex:1;">'
      +'<div style="font-size:13px;font-weight:800;color:'+nameColor+';margin-bottom:2px;">'+NAMES[key]+'</div>'
      +'<div style="font-size:10px;color:rgba(255,255,255,.4);">'+SHRINES[key]+'</div>'
      +'</div>'
      +orderBadge+tick
      +'</div>';

    /* بدنه بر اساس phase */
    var bodyHtml='';

    if(phase==='nights'){
      bodyHtml='<div style="margin-top:14px;background:rgba(201,168,76,.1);border:1px solid rgba(201,168,76,.3);border-radius:14px;padding:14px;animation:bsFadeUp .28s ease both;">'
        +'<div style="font-size:11px;font-weight:700;color:rgba(201,168,76,.9);margin-bottom:12px;display:flex;align-items:center;gap:6px;"><span>🌙</span> چند شب در '+NAMES[key]+' می‌مانید؟</div>'
        /* ردیف شب + عبوری در یک خط */
        +'<div style="display:flex;align-items:center;justify-content:space-between;gap:10px;margin-bottom:12px;">'
        /* عبوری */
        +'<div id="wsTchWrap_'+key+'" onclick="wsTapTransit(event,\''+key+'\')" style="display:flex;align-items:center;gap:7px;padding:7px 12px;background:rgba(255,255,255,.06);border:1.5px solid rgba(255,255,255,.12);border-radius:100px;cursor:pointer;flex-shrink:0;transition:border-color .2s;">'
        +'<div id="wsTch_'+key+'" style="width:15px;height:15px;border:1.5px solid rgba(201,168,76,.45);border-radius:4px;display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:all .2s;"></div>'
        +'<span style="font-size:11px;color:rgba(255,255,255,.55);white-space:nowrap;">عبوری</span>'
        +'</div>'
        /* stepper شب */
        +'<div style="display:flex;align-items:center;gap:8px;background:rgba(255,255,255,.08);border:1.5px solid rgba(201,168,76,.3);border-radius:100px;padding:5px 10px;" id="wsNightsStepper_'+key+'">'
        +'<button onclick="wsChgN(event,\''+key+'\',-1)" style="width:28px;height:28px;border:none;border-radius:50%;background:rgba(201,168,76,.25);color:var(--goldL);font-size:18px;font-weight:700;cursor:pointer;display:flex;align-items:center;justify-content:center;font-family:Vazirmatn,sans-serif;line-height:1;transition:background .18s;">−</button>'
        +'<span id="wsNv_'+key+'" style="font-size:20px;font-weight:900;color:var(--goldL);min-width:36px;text-align:center;">'+P(WS.nights[key]||0)+'</span>'
        +'<span style="font-size:10px;color:rgba(255,255,255,.4);">شب</span>'
        +'<button onclick="wsChgN(event,\''+key+'\',1)" style="width:28px;height:28px;border:none;border-radius:50%;background:rgba(201,168,76,.25);color:var(--goldL);font-size:18px;font-weight:700;cursor:pointer;display:flex;align-items:center;justify-content:center;font-family:Vazirmatn,sans-serif;line-height:1;transition:background .18s;">+</button>'
        +'</div>'
        +'</div>'
        +'<button onclick="wsConfirmNights(\''+key+'\')" style="width:100%;padding:11px;border-radius:100px;border:none;background:linear-gradient(135deg,var(--gold),#a8722a);color:var(--em);font-family:Vazirmatn,sans-serif;font-size:12.5px;font-weight:800;cursor:pointer;transition:all .2s;">تأیید و انتخاب هتل ←</button>'
        +'</div>';

    } else if(phase==='hotel'){
      bodyHtml='<div style="margin-top:14px;animation:bsFadeUp .28s ease both;">'
        +'<div style="font-size:11px;font-weight:700;color:rgba(201,168,76,.9);margin-bottom:10px;display:flex;align-items:center;gap:6px;"><span>🏨</span> هتل مورد نظر را انتخاب کنید</div>'
        +buildHotelList(key)
        +'</div>';

    } else if(phase==='done'){
      var hn=WS.transit[key]?'عبوری':(WS.hotel[key]!==undefined?HOTELS[key][WS.hotel[key]].name:'—');
      var nightsStr=WS.transit[key]?'عبوری':(P(WS.nights[key])+' شب');
      var checkSVG='<div style="width:22px;height:22px;background:#c9a84c;border-radius:50%;display:flex;align-items:center;justify-content:center;flex-shrink:0;"><svg width=\"11\" height=\"11\" viewBox=\"0 0 12 12\" fill=\"none\"><polyline points=\"1.5 6 4.5 9 10.5 3\" stroke=\"#0d3b2e\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg></div>';
      var editSVG='<svg width=\"10\" height=\"10\" viewBox=\"0 0 12 12\" fill=\"none\"><path d=\"M8.5 1.5l2 2L4 10H2v-2L8.5 1.5z\" stroke=\"currentColor\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>';
      bodyHtml='<div style="margin-top:10px;display:flex;align-items:center;gap:10px;background:rgba(26,94,73,.15);border:1px solid rgba(26,94,73,.4);border-radius:12px;padding:10px 12px;">'
        +checkSVG
        +'<div style="flex:1;">'
        +'<div style="font-size:12px;font-weight:700;color:#4ade80;">'+nightsStr+'</div>'
        +(hn&&hn!=='عبوری'?'<div style="font-size:10px;color:rgba(255,255,255,.4);margin-top:2px;">'+hn+'</div>':'')
        +'</div>'
        +'<button onclick="wsEdit(\''+key+'\')" style="display:flex;align-items:center;gap:4px;font-size:10px;color:rgba(255,255,255,.4);cursor:pointer;border:1px solid rgba(255,255,255,.15);padding:4px 10px;border-radius:100px;background:transparent;font-family:Vazirmatn,sans-serif;transition:all .2s;">'+editSVG+'ویرایش</button>'
        +'</div>';
    }

    card.innerHTML=headerHtml+bodyHtml;
    return card;
  }

  function buildHotelList(key){
    var html='';
    ['alef','be','jim'].forEach(function(cat){
      var hs=HOTELS[key].filter(function(h){return h.cat===cat;});
      if(!hs.length)return;
      var catLabel=cat==='alef'?'الف — لوکس ✦':cat==='be'?'ب — متوسط':'ج — اقتصادی';
      html+='<div style="font-size:9.5px;font-weight:800;color:rgba(201,168,76,.55);letter-spacing:.08em;margin:12px 0 6px;text-transform:uppercase;">درجه '+catLabel+'</div>';
      hs.forEach(function(h){
        var idx=HOTELS[key].indexOf(h);
        var isSel=WS.hotel[key]===idx;
        var starRow='<div style="display:flex;gap:3px;align-items:center;margin-top:3px;">';
        for(var i=1;i<=5;i++) starRow+='<div style="width:5px;height:5px;border-radius:50%;background:'+(i<=h.stars?'#c9a84c':'rgba(255,255,255,.15)')+'"></div>';
        starRow+='</div>';
        html+='<div style="border-radius:14px;border:1.5px solid '+(isSel?'#c9a84c':'rgba(255,255,255,.1)')+';background:'+(isSel?'rgba(201,168,76,.12)':'rgba(255,255,255,.03)')+';margin-bottom:8px;overflow:hidden;transition:all .2s;">'
          /* hotel row */
          +'<div style="display:flex;align-items:center;gap:10px;padding:10px 12px;">'
          +'<div style="flex:1;">'
          +'<div style="font-size:12.5px;font-weight:700;color:'+(isSel?'#e8c97a':'rgba(255,255,255,.88)')+';">'+h.name+'</div>'
          +starRow
          +'<div style="font-size:10px;color:rgba(255,255,255,.35);margin-top:3px;">📍 '+h.dist+' از حرم</div>'
          +'</div>'
          /* check icon if selected */
          +(isSel?'<div style="width:24px;height:24px;background:#c9a84c;border-radius:50%;display:flex;align-items:center;justify-content:center;flex-shrink:0;"><svg width=\"12\" height=\"12\" viewBox=\"0 0 12 12\" fill=\"none\"><polyline points=\"1.5 6 4.5 9 10.5 3\" stroke=\"#0d3b2e\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg></div>':'')
          +'</div>'
          /* action buttons row */
          +'<div style="display:flex;gap:0;border-top:1px solid rgba(255,255,255,.08);">'
          +'<button onclick="wsViewHotel(event,\''+key+'\','+idx+')" style="flex:1;padding:9px 12px;background:rgba(255,255,255,.05);border:none;color:rgba(255,255,255,.55);font-family:Vazirmatn,sans-serif;font-size:11px;font-weight:600;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;transition:background .18s;">'
          +'<svg width=\"13\" height=\"13\" viewBox=\"0 0 16 16\" fill=\"none\"><path d=\"M1 8s2.5-5 7-5 7 5 7 5-2.5 5-7 5-7-5-7-5z\" stroke=\"currentColor\" stroke-width=\"1.5\"/><circle cx=\"8\" cy=\"8\" r=\"2\" stroke=\"currentColor\" stroke-width=\"1.5\"/></svg>'
          +'مشاهده عکس'
          +'</button>'
          +'<div style="width:1px;background:rgba(255,255,255,.08);"></div>'
          +'<button onclick="wsPickHotelDirect(event,\''+key+'\','+idx+')" style="flex:1;padding:9px 12px;background:'+(isSel?'rgba(201,168,76,.2)':'rgba(255,255,255,.05)')+';border:none;color:'+(isSel?'#e8c97a':'rgba(255,255,255,.55)')+';font-family:Vazirmatn,sans-serif;font-size:11px;font-weight:700;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;transition:background .18s;">'
          +(isSel?'<svg width=\"13\" height=\"13\" viewBox=\"0 0 16 16\" fill=\"none\"><polyline points=\"2 8 6 12 14 4\" stroke=\"#c9a84c\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>انتخاب شد':'انتخاب این هتل')
          +'</button>'
          +'</div>'
          +'</div>';
      });
    });
    return html;
  }

  /* باز کردن مودال عکس هتل از ویزارد */
  window.wsViewHotel=function(e,key,idx){
    e.stopPropagation();
    /* map wizard HOTELS to global HOTEL_DATA index */
    var wh=HOTELS[key][idx];
    var globalIdx=(HOTEL_DATA[key]||[]).findIndex(function(h){return h.name===wh.name;});
    if(globalIdx<0) globalIdx=idx;
    /* after confirm in HPM, pick hotel in wizard */
    window._hpmWizardCallback=function(){ wsPickHotel(key,idx); };
    openHotelPhotoModal(key,globalIdx);
  };

  window.wsPickHotelDirect=function(e,key,idx){
    e.stopPropagation();
    wsPickHotel(key,idx);
  };

  /* ── رویدادها ── */
  window.wsTapCard=function(key){
    if(WS.cities.indexOf(key)===-1){
      /* شهر جدید انتخاب شد */
      WS.cities.push(key);
      WS.nights[key]=0;
      WS.transit[key]=false;
      WS.phase[key]='nights';
      wsRender();
      setTimeout(function(){
        var el=document.getElementById('wsNv_'+key);
        if(el){el.style.transform='scale(1.3)';setTimeout(function(){el.style.transform='';},300);}
        var card=document.getElementById('wsCard_'+key);
        if(card)card.scrollIntoView({behavior:'smooth',block:'nearest'});
      },200);
    }
  };

  window.wsTapTransit=function(e,key){
    e.stopPropagation();
    WS.transit[key]=!WS.transit[key];
    var wrap=document.getElementById('wsTchWrap_'+key);
    var chk=document.getElementById('wsTch_'+key);
    var stepper=document.getElementById('wsNightsStepper_'+key);
    if(WS.transit[key]){
      if(chk){chk.style.background='var(--gold)';chk.style.borderColor='var(--gold)';chk.innerHTML='<span style="font-size:9px;color:var(--em);font-weight:800;">✓</span>';}
      if(wrap) wrap.style.borderColor='var(--gold)';
      if(stepper){stepper.style.opacity='.3';stepper.style.pointerEvents='none';}
    } else {
      if(chk){chk.style.background='';chk.style.borderColor='rgba(201,168,76,.45)';chk.innerHTML='';}
      if(wrap) wrap.style.borderColor='rgba(255,255,255,.12)';
      if(stepper){stepper.style.opacity='';stepper.style.pointerEvents='';}
    }
  };

  window.wsChgN=function(e,key,d){
    e.stopPropagation();
    WS.nights[key]=Math.max(0,Math.min(14,(WS.nights[key]||0)+d));
    var el=document.getElementById('wsNv_'+key);
    if(el) el.textContent=P(WS.nights[key]);
  };

  window.wsConfirmNights=function(key){
    if(!WS.transit[key]&&(!WS.nights[key]||WS.nights[key]<1)){
      var el=document.getElementById('wsNv_'+key);
      if(el){el.style.color='#f87171';el.style.transform='scale(1.4)';setTimeout(function(){el.style.color='';el.style.transform='';},700);}
      return;
    }
    if(WS.transit[key]){WS.phase[key]='done';}
    else{WS.phase[key]='hotel';}
    wsRender();
    setTimeout(function(){
      var card=document.getElementById('wsCard_'+key);
      if(card)card.scrollIntoView({behavior:'smooth',block:'nearest'});
    },180);
  };

  window.wsPickHotel=function(key,idx){
    WS.hotel[key]=idx;
    WS.phase[key]='done';
    wsRender();
    setTimeout(function(){
      var card=document.getElementById('wsCard_'+key);
      if(card)card.scrollIntoView({behavior:'smooth',block:'nearest'});
      /* اگه همه done شدن، پالس دکمه ادامه */
      var allDone=WS.cities.length>0&&WS.cities.every(function(k){return WS.phase[k]==='done';});
      if(allDone){
        var btn=document.querySelector('#iwSlide2 .iw-next-btn');
        if(btn){
          btn.style.background='linear-gradient(135deg,var(--gold),#a8722a)';
          btn.style.color='var(--em)';
          btn.textContent='✦ ادامه — نوع سفر';
        }
      }
    },200);
  };

  window.wsEdit=function(key){
    WS.phase[key]='nights';
    wsRender();
    setTimeout(function(){
      var card=document.getElementById('wsCard_'+key);
      if(card)card.scrollIntoView({behavior:'smooth',block:'nearest'});
    },150);
  };

  function syncIW(){
    if(!window._IW)return;
    window._IW.cities=WS.cities.slice();
    WS.cities.forEach(function(k){
      window._IW.nights[k]=WS.nights[k]||0;
      window._IW.transit[k]=WS.transit[k]||false;
    });
  }

  function updateRoutePreview(){
    var el=document.getElementById('iwRoutePreview');
    if(!el)return;
    if(!WS.cities.length){el.classList.remove('show');return;}
    el.classList.add('show');
    var parts=WS.cities.map(function(k){
      var info=WS.transit[k]?'(عبوری)':(WS.nights[k]?P(WS.nights[k])+' شب':'...');
      return '<strong>'+NAMES[k]+'</strong> — '+info;
    });
    el.innerHTML='🗺️ مسیر: '+parts.join(' ← ');
  }

  /* ── Override توابع اصلی IW ── */
  /* iwToggleCity */
  window.iwToggleCity=function(key){
    if(WS.cities.indexOf(key)>-1){
      WS.cities.splice(WS.cities.indexOf(key),1);
      delete WS.phase[key]; delete WS.hotel[key];
      wsRender();
    } else {
      wsTapCard(key);
    }
  };

  /* iwNext step 2 — validate */
  var _origIwNext=window.iwNext;
  window.iwNext=function(fromStep){
    if(fromStep===2){
      if(!WS.cities.length){
        var e=document.getElementById('iwErr2');
        if(e){e.textContent='لطفاً حداقل یک شهر زیارتی انتخاب کنید.';e.classList.add('show');}
        return;
      }
      var nd=WS.cities.filter(function(k){return WS.phase[k]!=='done';});
      if(nd.length){
        var e2=document.getElementById('iwErr2');
        if(e2){e2.textContent='لطفاً برای همه شهرها تعداد شب و هتل را انتخاب کنید.';e2.classList.add('show');}
        /* اسکرول به اولین ناقص */
        var card=document.getElementById('wsCard_'+nd[0]);
        if(card)card.scrollIntoView({behavior:'smooth',block:'nearest'});
        return;
      }
      document.getElementById('iwErr2').classList.remove('show');
      window._wsHotelSel=WS.hotel;
    }
    if(_origIwNext)_origIwNext(fromStep);
  };

  /* iwFinish — sync hotel به state */
  var _origIwFinish=window.iwFinish;
  window.iwFinish=function(){
    if(window._wsHotelSel&&typeof state!=='undefined'&&state.cityData){
      WS.cities.forEach(function(k){
        if(state.cityData[k]&&window._wsHotelSel[k]!==undefined){
          state.cityData[k].hotel=window._wsHotelSel[k];
        }
      });
    }
    if(_origIwFinish)_origIwFinish();
  };

  /* ── اولین رندر بعد لود ── */
  document.addEventListener('DOMContentLoaded',function(){
    setTimeout(wsRender,400);
  });

})();
