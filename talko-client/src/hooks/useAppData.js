import { useReducer } from 'react';


/** Reducer accepts an action type and returns the current state, dispatch pair. */

/** Action types */
const SET_TONE = 'SET_TONE';
const SET_TRANSCRIPT_INPUT = 'SET_TRANSCRIPT_INPUT';
const SET_AUDIO_BLOB = 'SET_AUDIO_BLOB';
const SET_SPEECH_STATS = 'SET_SPEECH_STATS';


/** Reducer switch statements */
const reducer = (state, action) => {
    switch (action.type) {
        case SET_TONE:
            return { ...state, tone: action.value };
        case SET_TRANSCRIPT_INPUT:
            return { ...state, transcriptInput: action.value };
        case SET_AUDIO_BLOB:
            return { ...state, audioBlob: action.value };
        case SET_SPEECH_STATS:
            return { ...state, speechStats: action.value }
        default:
            throw new Error(`App::reducer::error - Invalid action type: ${action.type}`);
    }
};

/**
 * Return default app attributes and values.
 * 
 * @param {Number} tone  A value from 0 to 10 (inclusive) indicating the 
 *                       nature of a speech. For example, 0 indicates a 
 *                       speech that revolves around a serious issue, 5 
 *                       indicates an informative speech, 10 indicates 
 *                       a motivational speech.
 * 
 * @param {String} transcriptInput A speech transcript input by user.
 * 
 * @param {Blob} audioBlob An audio blob containing user's recorded speech.
 * 
 * @param {Object} speechStats Analyzed audio result object.
 * 
 */
const initApp = (tone=0, transcriptInput='', audioBlob=null, speechStats={}) => {
    return {
        tone,
        transcriptInput,
        audioBlob,
        speechStats
    };
};

const useAppData = () => {
	const [state, dispatch] = useReducer(reducer, initApp(/** Add default param here (if available) */));

    // Set methods for each state
    const setTone = (tone) => dispatch({ type: SET_TONE, value: tone });
    const setTranscriptInput = (transcriptInput) => dispatch({ type: SET_TRANSCRIPT_INPUT, value: transcriptInput });
    const setAudioBlob = (audioBlob) => dispatch({ type: SET_AUDIO_BLOB, value: audioBlob });
    const setSpeechStats = (speechStats) => dispatch({ type: SET_SPEECH_STATS, value: speechStats });

    return {
        state,
        setTone,
        setTranscriptInput,
        setAudioBlob,
        setSpeechStats
    }
};

export default useAppData;