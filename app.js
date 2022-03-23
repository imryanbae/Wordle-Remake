var words = "AdmitAdoptAgreeAllowAlterApplyArgueAriseAvoidBeginBlameBreakBringBuildBurstCarryCatchCauseCheckClaimCleanClearClimbCloseCountCoverCrossDanceDoubtDrinkDriveEnjoyEnterExistFightFocusForceGuessImplyIssueJudgeLaughLearnLeaveLet’sLimitMarryMatchOccurOfferOrderPhonePlacePointPressProveRaiseReachReferRelaxServeShallShareShiftShootSleepSolveSoundSpeakSpendSplitStandStartStateStickStudyTeachThankThinkThrowTouchTrainTreatTrustVisitVoiceWasteWatchWorryWouldWriteAbuseAdultAgentAngerAppleAwardBasisBeachBirthBlockBloodBoardBrainBreadBreakBrownBuyerCauseChainChairChestChiefChildChinaClaimClassClockCoachCoastCourtCoverCreamCrimeCrossCrowdCrownCycleDanceDeathDepthDoubtDraftDramaDreamDressDrinkDriveEarthEnemyEntryErrorEventFaithFaultFieldFightFinalFloorFocusForceFrameFrankFrontFruitGlassGrantGrassGreenGroupGuideHeartHenryHorseHotelHouseImageIndexInputIssueJapanJonesJudgeKnifeLauraLayerLevelLewisLightLimitLunchMajorMarchMatchMetalModelMoneyMonthMotorMouthMusicNightNoiseNorthNovelNurseOfferOrderOtherOwnerPanelPaperPartyPeacePeterPhasePhonePiecePilotPitchPlacePlanePlantPlatePointPoundPowerPressPricePridePrizeProofQueenRadioRangeRatioReplyRightRiverRoundRouteRugbyScaleSceneScopeScoreSenseShapeShareSheepSheetShiftShirtShockSightSimonSkillSleepSmileSmithSmokeSoundSouthSpaceSpeedSpiteSportSquadStaffStageStartStateSteamSteelStockStoneStoreStudyStuffStyleSugarTableTasteTerryThemeThingTitleTotalTouchTowerTrackTradeTrainTrendTrialTrustTruthUncleUnionUnityValueVideoVisitVoiceWasteWatchWaterWhileWhiteWholeWomanWorldYouth"
let wordChoices=words.match(/.{1,5}/g);
var mustbereal = "abuseadultagentangerappleawardbasisbeachbirthblockbloodboardbrainbreadbreakbrownbuyercausechainchairchestchiefchildchinaclaimclassclockcoachcoastcourtcovercreamcrimecrosscrowdcrowncycledancedeathdepthdoubtdraftdramadreamdressdrinkdriveearthenemyentryerroreventfaithfaultfieldfightfinalfloorfocusforceframefrankfrontfruitglassgrantgrassgreengroupguidehearthenryhorsehotelhouseimageindexinputissuejapanjonesjudgeknifelauralayerlevellewislightlimitlunchmajormarchmatchmetalmodelmoneymonthmotormouthmusicnightnoisenorthnovelnurseofferorderotherownerpanelpaperpartypeacepeterphasephonepiecepilotpitchplaceplaneplantplatepointpoundpowerpresspriceprideprizeproofqueenradiorangeratioreplyrightriverroundrouterugbyscalescenescopescoresenseshapesharesheepsheetshiftshirtshocksightsimonskillsleepsmilesmithsmokesoundsouthspacespeedspitesportsquadstaffstagestartstatesteamsteelstockstonestorestudystuffstylesugartabletasteterrythemethingtitletotaltouchtowertracktradetraintrendtrialtrusttruthuncleunionunityvaluevideovisitvoicewastewatchwaterwhilewhitewholewomanworldyouthalconaughthellaone’soughtthametherethinethinewherewhichwhosewhosoyoursyoursadmitadoptagreeallowalterapplyargueariseavoidbeginblamebreakbringbuildburstcarrycatchcausecheckclaimcleanclearclimbclosecountcovercrossdancedoubtdrinkdriveenjoyenterexistfightfocusforceguessimplyissuejudgelaughlearnleavelet’slimitmarrymatchoccurofferorderphoneplacepointpressproveraisereachreferrelaxserveshallshareshiftshootsleepsolvesoundspeakspendsplitstandstartstatestickstudyteachthankthinkthrowtouchtraintreattrustvisitvoicewastewatchworrywouldwriteaboveacutealivealoneangryawareawfulbasicblackblindbravebriefbroadbrowncheapchiefcivilcleanclearclosecrazydailydirtyearlyemptyequalexactextrafaintfalsefifthfinalfirstfreshfrontfunnygiantgrandgreatgreengrosshappyharshheavyhumanidealinnerjointlargelegallevellightlocallooseluckymagicmajorminormoralnakednastynavalotherouterplainprimepriorproudquickquietrapidreadyrightromanroughroundroyalruralsharpsheershortsillysixthsmallsmartsolidsorrysparesteepstillsupersweetthickthirdtighttotaltoughupperupseturbanusualvaguevalidvitalwhitewholewrongyoungaforeafterbotheothersinceslashuntilwherewhileabackabaftaboonaboutaboveacceladownafootaforeafoulafteragainagapeagogoagoneaheadahullalifealikealinealoftalonealongaloofaloudamissamplyamuckapaceapartaptlyarearasideaskewawfulbadlyballybelowcannycheapcleanclearcoylydailydimlydirtydittodrilydrylydullyearlyextrafalsefatlyfeylyfirstfitlyforteforthfreshfullyfunnygailygaylygodlygreathaplyheavyhellahencehotlyicilyinfraintl.jildijollylaxlylentolightlowlymadlymaybenevernewlynoblyoddlyoftenotheroughtpartypianoplainplonkplumbpriorqueerquickquiteramenrapidredlyrightroughroundsadlysecussellysharpsheershilyshortshylysillysincesleekslylysmallso-sosoundspangsrslystarkstillstonestoursupertallytantotherethicktighttodaytomoztrulytwiceunderutterverrywanlywetlywherewrongwrylyabaftaboonaboutaboveadownaforeafteralongaloofamongbelowcircacrossfurthminusneathroundsincespiteunderuntilaarghadieuadiosalackalohaavastbakawbastabegadblessbligebravabravobringchookdammedildodittofrickfudgegollygratzhallohastahavochellahellohowayhowdyhullohuzzajesuskapowlooselordymarrymercynightplonkpsychquitesalveskoalsniffsooeytherethiamthwaptoughtwirpviolavivatwackowaheywhistwilmawirrawoopswowieyecchyeehayeeshyowchzowie"
let trust = mustbereal.match(/.{1,5}/g)
console.log(trust)
// let trustF = trust.toLowerCase();
// console.log(wordChoices.join(' '));
var wordThing = wordChoices[Math.floor(Math.random() * wordChoices.length)];
let word = wordThing.toLowerCase();


var array = word.split("");
// console.log(array);
var arrayAnswer;
var a = 0;
var b = 0;
var c;

function yes() {
    document.getElementById("userinput").focus();

}



function userword() {
    window.thing = document.getElementById("userinput").nodeValue;
    console.log(thing)
}

function yes() {
    document.getElementById("userinput").focus();

}


var inputarray = [];
// var userinputjs;



// document.getElementById('userinput').onkeydown = function(z){

    


//     if (z.keyCode >= 65 && z.keyCode <= 90){
//         userinputjs = document.getElementById(`userinput`).value

//         inputarray.push(userinputjs)

//         console.log(inputarray)


//         // console.log(userinputjs)

//     } else if (z.keyCode == 8) {
//         inputarray.pop(``);
//         console.log(inputarray)
//     }
//     document.getElementById('userinput').value='';


//     // document.getElementById('userinput').value='';

//  };

var key;
var finalword
var counterthing = 0;
document.getElementById(`userinput`).onkeyup = function(z) {


    if (z.keyCode >= 65 && z.keyCode <= 90) {
        if (inputarray.length > 5) {
            inputarray.pop()
        } else if (inputarray.length < 5) {
            key = document.getElementById("userinput").value

            inputarray.push(key)
        
            console.log(inputarray)
            document.getElementById(`userinput`).value = ``;
        }


        
    }  else (
        document.getElementById(`userinput`).value = ``

    ) 
    if (z.keyCode == 8) {
        inputarray.pop(``);
        console.log(inputarray)
    } 

    if (inputarray.length == 5 && z.keyCode == 13) {
        finalword = inputarray.join(``)
        console.log(finalword)
        inputarray = []
        counterthing++;
    }
    arrayAnswer = finalword

    

}



function qasker() {
    // question asker 
    // window.askFirst = prompt(`Guess`)
    window.arrayAnswer = finalword.split("")
    window.checker = trust.indexOf()


}
        


function clogic() {
    for (let i = 0; i < 5; i++) {
        if (checker == -1) {
            break;
        } else if (arrayAnswer[i] == array[i]) {
            console.log(`Letter ${arrayAnswer[i]} was correct. It is in the right spot.`)
        } else if (arrayAnswer[i] != array[i]) {
            var wrongSpot = array.indexOf(arrayAnswer[i])


            if (wrongSpot == -1) {

                console.log(`Letter ${arrayAnswer[i]} was entirely incorrect.`)
            } else {
                var wrongSpot = array.indexOf(arrayAnswer[i])

                console.log(`letter ${arrayAnswer[i]} is in the wrong spot.`)
            }
        }
    }

}
function wlogic() {
    if (checker == -1){
        alert(`Type a real, 5 letter word`)
        a--;
    }
}

function counter() {
    if (checker == -1) {
        b--
    }
    if (b < 6 ) {
        b++;
        console.log(`It has been ${b} turns.`)
        
        console.log(b)
    }
    if (b == 6) {
        console.log(`It has been ${b} turns. The correct word was ${word}`)
    }
    

    
    
}

function start() {
    for (let c = 0; c < 6; c++) {
        qasker()
        clogic()
        wlogic()
        counter()
        if (checker == -1 ){
            c--
        }
    }
    
}

start()
            
            
            
            
         
        
        



