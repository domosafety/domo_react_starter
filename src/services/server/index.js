export const MEDIA_TYPES = {
	JSON: "application/json; charset=utf-8",
	FORM: "application/x-www-form-urlencoded",
	PDF: "application/pdf",
	MULTIPART_FORM: "multipart/form-data",
};

class Server {
	static get defaultOptions() {
		return {
			url: null,
			method: "GET",
			data: null,
			contentType: MEDIA_TYPES.JSON,
			accept: MEDIA_TYPES.JSON,
		};
	}

	generateContentHeader(contentType) {
		return {
			"Content-Type": contentType,
		};
	}

	generateBody(options) {
		if (options.contentType === MEDIA_TYPES.JSON && options.data) {
			return JSON.stringify(options.data);
		}

		if (options.contentType === MEDIA_TYPES.MULTIPART_FORM) {
			if (!options.data instanceof FormData) {
				throw new Error("When sending a multipart form the data should be built using the FormData class.");
			}
			return options.data;
		}

		return null;
	}

	async _sendCommand(options) {
		const url = new URL(`${options.url}`);
		if (options.contentType === MEDIA_TYPES.FORM && options.data) {
			Object.keys(options.data).forEach((key) => url.searchParams.append(key, options.data[key]));
		}

		return await fetch(url, {
			method: options.method,
			headers: {
				...this.generateContentHeader(options.contentType),
			},
			body: this.generateBody(options),
		})
			.then((response) => {
				switch (options.accept) {
					case MEDIA_TYPES.PDF:
						return response.blob();
					default:
						return response.json();
				}
			})
			.catch((e) => {
				console.log(e);
				throw Error(e.message);
			});
	}

	async sendMultiPartForm(options) {
		options = {
			...Server.defaultOptions,
			...options,
			method: "POST",
			contentType: MEDIA_TYPES.MULTIPART_FORM,
		};
		return this._sendCommand(options);
	}

	async sendGet(options) {
		options = {
			...Server.defaultOptions,
			...options,
			method: "GET",
			contentType: MEDIA_TYPES.FORM,
		};
		return this._sendCommand(options);
	}

	async sendPost(options) {
		options = {
			...Server.defaultOptions,
			...options,
			method: "POST",
		};
		return this._sendCommand(options);
	}

	async sendPut(options) {
		options = {
			...Server.defaultOptions,
			...options,
			method: "PUT",
		};
		return this._sendCommand(options);
	}

	async sendPatch(options) {
		options = {
			...Server.defaultOptions,
			...options,
			method: "PATCH",
		};
		return this._sendCommand(options);
	}

	async sendDelete(options) {
		options = {
			...Server.defaultOptions,
			...options,
			method: "DELETE",
		};
		return this._sendCommand(options);
	}
}

export default new Server();
