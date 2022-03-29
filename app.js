var words = "AdmitAdoptAgreeAllowAlterApplyArgueAriseAvoidBeginBlameBreakBringBuildBurstCarryCatchCauseCheckClaimCleanClearClimbCloseCountCoverCrossDanceDoubtDrinkDriveEnjoyEnterExistFightFocusForceGuessImplyIssueJudgeLaughLearnLeaveLet’sLimitMarryMatchOccurOfferOrderPhonePlacePointPressProveRaiseReachReferRelaxServeShallShareShiftShootSleepSolveSoundSpeakSpendSplitStandStartStateStickStudyTeachThankThinkThrowTouchTrainTreatTrustVisitVoiceWasteWatchWorryWouldWriteAbuseAdultAgentAngerAppleAwardBasisBeachBirthBlockBloodBoardBrainBreadBreakBrownBuyerCauseChainChairChestChiefChildChinaClaimClassClockCoachCoastCourtCoverCreamCrimeCrossCrowdCrownCycleDanceDeathDepthDoubtDraftDramaDreamDressDrinkDriveEarthEnemyEntryErrorEventFaithFaultFieldFightFinalFloorFocusForceFrameFrankFrontFruitGlassGrantGrassGreenGroupGuideHeartHenryHorseHotelHouseImageIndexInputIssueJapanJonesJudgeKnifeLauraLayerLevelLewisLightLimitLunchMajorMarchMatchMetalModelMoneyMonthMotorMouthMusicNightNoiseNorthNovelNurseOfferOrderOtherOwnerPanelPaperPartyPeacePeterPhasePhonePiecePilotPitchPlacePlanePlantPlatePointPoundPowerPressPricePridePrizeProofQueenRadioRangeRatioReplyRightRiverRoundRouteRugbyScaleSceneScopeScoreSenseShapeShareSheepSheetShiftShirtShockSightSimonSkillSleepSmileSmithSmokeSoundSouthSpaceSpeedSpiteSportSquadStaffStageStartStateSteamSteelStockStoneStoreStudyStuffStyleSugarTableTasteTerryThemeThingTitleTotalTouchTowerTrackTradeTrainTrendTrialTrustTruthUncleUnionUnityValueVideoVisitVoiceWasteWatchWaterWhileWhiteWholeWomanWorldYouth"
let wordChoices = words.match(/.{1,5}/g);
var mustbereal = "abuseadultagentangerappleawardbasisbeachbirthblockbloodboardbrainbreadbreakbrownbuyercausechainchairchestchiefchildchinaclaimclassclockcoachcoastcourtcovercreamcrimecrosscrowdcrowncycledancedeathdepthdoubtdraftdramadreamdressdrinkdriveearthenemyentryerroreventfaithfaultfieldfightfinalfloorfocusforceframefrankfrontfruitglassgrantgrassgreengroupguidehearthenryhorsehotelhouseimageindexinputissuejapanjonesjudgeknifelauralayerlevellewislightlimitlunchmajormarchmatchmetalmodelmoneymonthmotormouthmusicnightnoisenorthnovelnurseofferorderotherownerpanelpaperpartypeacepeterphasephonepiecepilotpitchplaceplaneplantplatepointpoundpowerpresspriceprideprizeproofqueenradiorangeratioreplyrightriverroundrouterugbyscalescenescopescoresenseshapesharesheepsheetshiftshirtshocksightsimonskillsleepsmilesmithsmokesoundsouthspacespeedspitesportsquadstaffstagestartstatesteamsteelstockstonestorestudystuffstylesugartabletasteterrythemethingtitletotaltouchtowertracktradetraintrendtrialtrusttruthuncleunionunityvaluevideovisitvoicewastewatchwaterwhilewhitewholewomanworldyouthalconaughthellaone’soughtthametherethinethinewherewhichwhosewhosoyoursyoursadmitadoptagreeallowalterapplyargueariseavoidbeginblamebreakbringbuildburstcarrycatchcausecheckclaimcleanclearclimbclosecountcovercrossdancedoubtdrinkdriveenjoyenterexistfightfocusforceguessimplyissuejudgelaughlearnleavelet’slimitmarrymatchoccurofferorderphoneplacepointpressproveraisereachreferrelaxserveshallshareshiftshootsleepsolvesoundspeakspendsplitstandstartstatestickstudyteachthankthinkthrowtouchtraintreattrustvisitvoicewastewatchworrywouldwriteaboveacutealivealoneangryawareawfulbasicblackblindbravebriefbroadbrowncheapchiefcivilcleanclearclosecrazydailydirtyearlyemptyequalexactextrafaintfalsefifthfinalfirstfreshfrontfunnygiantgrandgreatgreengrosshappyharshheavyhumanidealinnerjointlargelegallevellightlocallooseluckymagicmajorminormoralnakednastynavalotherouterplainprimepriorproudquickquietrapidreadyrightromanroughroundroyalruralsharpsheershortsillysixthsmallsmartsolidsorrysparesteepstillsupersweetthickthirdtighttotaltoughupperupseturbanusualvaguevalidvitalwhitewholewrongyoungaforeafterbotheothersinceslashuntilwherewhileabackabaftaboonaboutaboveacceladownafootaforeafoulafteragainagapeagogoagoneaheadahullalifealikealinealoftalonealongaloofaloudamissamplyamuckapaceapartaptlyarearasideaskewawfulbadlyballybelowcannycheapcleanclearcoylydailydimlydirtydittodrilydrylydullyearlyextrafalsefatlyfeylyfirstfitlyforteforthfreshfullyfunnygailygaylygodlygreathaplyheavyhellahencehotlyicilyinfraintl.jildijollylaxlylentolightlowlymadlymaybenevernewlynoblyoddlyoftenotheroughtpartypianoplainplonkplumbpriorqueerquickquiteramenrapidredlyrightroughroundsadlysecussellysharpsheershilyshortshylysillysincesleekslylysmallso-sosoundspangsrslystarkstillstonestoursupertallytantotherethicktighttodaytomoztrulytwiceunderutterverrywanlywetlywherewrongwrylyabaftaboonaboutaboveadownaforeafteralongaloofamongbelowcircacrossfurthminusneathroundsincespiteunderuntilaarghadieuadiosalackalohaavastbakawbastabegadblessbligebravabravobringchookdammedildodittofrickfudgegollygratzhallohastahavochellahellohowayhowdyhullohuzzajesuskapowlooselordymarrymercynightplonkpsychquitesalveskoalsniffsooeytherethiamthwaptoughtwirpviolavivatwackowaheywhistwilmawirrawoopswowieyecchyeehayeeshyowchzowie"
let trust = mustbereal.match(/.{1,5}/g)
console.log(trust)


// let trustF = trust.toLowerCase();
// console.log(wordChoices.join(' '));
var wordThing = wordChoices[Math.floor(Math.random() * wordChoices.length)];
let word = wordThing.toLowerCase();

console.log(word)


var array = word.split("");
// console.log(array);
var arrayAnswer;
var a = 0;
var b = 0;
var c;
var z = 0;
var y = 0;
function yes() {
    document.getElementById("userinput").focus();

}


var colorRow = 1;
var colorColumn = 1;




function userword() {
    window.thing = document.getElementById("userinput").nodeValue;
    return thing;
    console.log(thing)
}

function yes() {
    document.getElementById("userinput").focus();

}


var inputarray = [];

var key;
var finalword
var counterthing = 0;
let timeout = 1;
var activeThing
var activeRow = 1;
var activeColumn = 1;
function reset() {
    document.getElementById(`userinput`).value = ``;
}

document.getElementById(`userinput`).onkeyup = function (z) {


    if (z.keyCode >= 65 && z.keyCode <= 90 && z.keyCode != 13 && z.keyCode != 8) {
        if (inputarray.length > 5) {
            inputarray.pop()
        } else if (inputarray.length < 5) {
            key = document.getElementById("userinput").value

            if (key == ``) {
            } else {
                inputarray.push(key)
                reset()
                console.log(inputarray)
            }
            if (activeColumn <= 5 && key != ``) {
                activeThing = document.getElementById(`${activeRow}${activeColumn}`)
                activeThing.children[0].innerHTML = key;
                
                activeColumn++;
            } 
        }

    }
    if (z.keyCode == 8) {
        inputarray.pop(``);
        document.getElementById(`userinput`).value = ``;
        console.log(inputarray)
        if (activeColumn > 1) {
            activeColumn--
            activeThing = document.getElementById(`${activeRow}${activeColumn}`)

            activeThing.children[0].innerHTML = "";
            console.log(`active column = ${activeColumn}`)

        }


        
    }
    if (inputarray.length == 5 && z.keyCode == 13 && b < 6) {
        window.finalword = inputarray.join(``)
        console.log(finalword)
        inputarray = []

        if (trust.indexOf(finalword) != -1) {
            activeRow++;
            activeColumn = 1;
            counterthing++;
        }
            

       
        z = 1;
        start();


    }

    
}

function qasker() {
    // question asker 
    // window.askFirst = prompt(`Guess`)
    window.checker = trust.indexOf(finalword)
    console.log(checker)
    window.arrayAnswer = finalword.split("")
    z = 0;
    
    
    


}

function clogic() {
    var element = document.getElementById(`${colorRow}${colorColumn}`)

    for (let i = 0; i < 5; i++) {
        if (checker == -1) {
            break;
        } else if (arrayAnswer[i] == array[i]) {
            element.style.backgroundColor = "#2fb325"
            colorColumn++
            console.log(`Letter ${arrayAnswer[i]} was correct. It is in the right spot.`)
        } else if (arrayAnswer[i] != array[i]) {
            var wrongSpot = array.indexOf(arrayAnswer[i])


            if (wrongSpot == -1) {
                element.style.backgroundColor = "#c42c1b"
                colorColumn++
                console.log(`Letter ${arrayAnswer[i]} was entirely incorrect.`)
            } else {
                var wrongSpot = array.indexOf(arrayAnswer[i])

                element.style.backgroundColor = "#d4c715"
                colorColumn++

                console.log(`letter ${arrayAnswer[i]} is in the wrong spot.`)
            }
        }
        element = document.getElementById(`${colorRow}${colorColumn}`)
        
    }
    colorRow++

}

function wlogic() {
    if (checker == -1) {
        alert(`Type a real, 5 letter word`)
        a--;
    }
}

function counter() {
    if (checker == -1) {
        b--
    } else if (b < 6) {
        b++;
        console.log(`It has been ${b} turns.`)

        console.log(b)
    } else if (b == 6) {
        console.log(`It has been ${b} turns. The correct word was ${word}`)
    }




}

function start() {
            if (word == finalword) {
                console.log(`you win!`)
                y = 1;

            } else if (y != 1) {
                    qasker()
                clogic()
                wlogic()
                // counter()
                if (checker == -1) {
                    console.log(`It has been ${b} turns.`)

                } else if (b < 6) {
                    b++;
                    console.log(`It has been ${b} turns.`)
            
                    console.log(b)
                } else if (b == 6) {
                    console.log(`It has been ${b} turns. The correct word was ${word}`)
                }
            }
    

            

           

            
        

  

    
        
            
        
    
    

}













